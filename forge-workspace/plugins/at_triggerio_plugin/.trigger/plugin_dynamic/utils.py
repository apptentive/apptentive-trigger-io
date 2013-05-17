# XXX should consolidate this with lib
import logging


LOG = logging.getLogger(__name__)

# # # # # # # # # # # # # # # # # # # 
#
# Data transform
# TODO XPath or similar?
#
# # # # # # # # # # # # # # # # # # # 
def transform(data, node_steps, fn, allow_set=False):
	'''Mutate an arbitrary nested dictionary/array combination with the given function.
	
	``node_steps`` is dot-separated instructions on how to arrive at the data node
	which needs changing::
	
		array_name.[]
		dictionary.key_name
		dictionary.*			   // all keys in a dictionary

	:param data: a nested dictionary / array combination
	:type data: ``dict``
	:param node_steps: dot-separated data path, e.g. my_dict.my_array.[].*.target_key
	:param fn: mutating function - will be passed the data found at the end
		``node_steps``, and should return the desired new value
	:param allow_set: if True the mutating function will be called with None for none
		existing keys - i.e. you can set new keys
	'''
	obj = data.copy()
	list(_handle_all(obj, node_steps.split('.'), fn, allow_set))
	return obj

def _yield_plain(obj, name):
	'If obj is a dictionary, yield an attribute'
	if hasattr(obj, '__contains__') and name in obj:
		yield obj[name]
def _yield_array(obj):
	'Yield all elements of an array'
	assert hasattr(obj, '__iter__'), 'Expecting an array, got %s' % obj
	for thing in obj:
		yield thing
def _yield_asterisk(obj):
	'Yield all values in a dictionary'
	if hasattr(obj, 'iteritems'):
		for _, value in obj.iteritems():
			yield value
def _yield_any(obj, name):
	'Yield a value, or array or dictionary values'
	if name == '*':
		return _yield_asterisk(obj)
	elif name == '[]':
		return _yield_array(obj)
	else:
		return _yield_plain(obj, name)

def recurse_dict(dictionary, fn):
	'''
	if the property isn't a string, recurse till it is
	'''
	for key, value in dictionary.iteritems():
		if hasattr(value, 'iteritems'):
			recurse_dict(value, fn)
		else:
			dictionary[key] = fn(value)

def _handle_all(obj, steps, fn, allow_set):
	if len(steps) > 1:
		for value in _yield_any(obj, steps[0]):
			for x in _handle_all(value, steps[1:], fn, allow_set):
				yield x
	else:
		step = steps[0]
		if step == '*':
			assert hasattr(obj, 'iteritems'), 'Expecting a dictionary, got %s' % obj
			recurse_dict(obj, fn)
		elif step == '[]':
			assert hasattr(obj, '__iter__'), 'Expecting an array, got %s' % obj
			for i, x in enumerate(obj):
				obj[i] = fn(x)
		else:
			if hasattr(obj, '__contains__') and step in obj:
				obj[step] = fn(obj[step])
			elif allow_set:
				obj[step] = fn(None)
	
# # # # # # # # # # # # # # # # # # # 
#
# End data transform
#
# # # # # # # # # # # # # # # # # # # 
