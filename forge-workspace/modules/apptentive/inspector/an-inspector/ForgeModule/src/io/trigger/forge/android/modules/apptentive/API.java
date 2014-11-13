package io.trigger.forge.android.modules.apptentive;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.apptentive.android.sdk.Apptentive;
import com.apptentive.android.sdk.Log;
import com.apptentive.android.sdk.model.CommerceExtendedData;
import com.apptentive.android.sdk.model.ExtendedData;
import com.apptentive.android.sdk.model.LocationExtendedData;
import com.apptentive.android.sdk.model.TimeExtendedData;
import com.apptentive.android.sdk.module.survey.OnSurveyFinishedListener;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.google.gson.JsonPrimitive;

import io.trigger.forge.android.core.ForgeApp;
import io.trigger.forge.android.core.ForgeParam;
import io.trigger.forge.android.core.ForgeTask;
import android.app.AlertDialog;
import android.content.DialogInterface;

public class API {
	
	// debug:
	
	public static void callListener(final ForgeTask task, @ForgeParam("name") final String name) {
		ForgeApp.event(name);
	}

	// ************************************************************************************************************************************************
	// Custom Data / Extended Data
	// ************************************************************************************************************************************************

	public static void setInitialUserName(final ForgeTask task, @ForgeParam("initialUserName") final String initialUserName) {
		Apptentive.setInitialUserName(ForgeApp.getActivity(), initialUserName);
		task.success();
	}
	
	public static void setInitialUserEmailAddress(final ForgeTask task, @ForgeParam("initialUserEmailAddress") final String initialUserEmailAddress) {
		Apptentive.setInitialUserEmail(ForgeApp.getActivity(), initialUserEmailAddress);
		task.success();
	}
	
	public static void addCustomDeviceData(final ForgeTask task, @ForgeParam("key") final String key, @ForgeParam("value") final String value) {
		Apptentive.addCustomDeviceData(ForgeApp.getActivity(), key, value);
		task.success();
	}
	
	public static void removeCustomDeviceData(final ForgeTask task, @ForgeParam("key") final String key) {
		Apptentive.removeCustomDeviceData(ForgeApp.getActivity(), key);
		task.success();
	}

	public static void addCustomPersonData(final ForgeTask task, @ForgeParam("key") final String key, @ForgeParam("value") final String value) {
		Apptentive.addCustomPersonData(ForgeApp.getActivity(), key, value);
		task.success();
	}
	
	public static void removeCustomPersonData(final ForgeTask task, @ForgeParam("key") final String key) {
		Apptentive.removeCustomPersonData(ForgeApp.getActivity(), key);
		task.success();
	}
	
	public static void makeExtendedDataTime(final ForgeTask task, @ForgeParam("time") final double time) {
		Log.e("makeExtendedDataTime(\"%f\"", time);
		try {
			TimeExtendedData timeExtendedData = new TimeExtendedData(time);

			
			JsonParser parser = new JsonParser();
			JsonObject timeJsonObject = (JsonObject)parser.parse(timeExtendedData.toString());
			JsonObject wrapper = new JsonObject();
			wrapper.add("time", timeJsonObject);
			task.success(wrapper);
		} catch (Exception e) {
			task.error(e);
		}
	}

	public static void makeExtendedDataLocation(final ForgeTask task, @ForgeParam("longitude") final Number longitude, @ForgeParam("latitude") final Number latitude) {
		Log.e("makeExtendedDataLocation(\"%s\", \"%s\"", longitude.toString(), latitude.toString());
		try {
			ExtendedData location = new LocationExtendedData(longitude.doubleValue(), latitude.doubleValue());

			JsonParser parser = new JsonParser();
			JsonObject locationJsonObject = (JsonObject)parser.parse(location.toString());
			JsonObject wrapper = new JsonObject();
			wrapper.add("location", locationJsonObject);
			task.success(wrapper);
		} catch (Exception e) {
			task.error(e);
		}
	}

	public static void makeExtendedDataCommerce(final ForgeTask task) {
		Log.e("makeExtendedDataCommerce(\"%s\"", task.params.toString());
		try {
			CommerceExtendedData commerce = new CommerceExtendedData();

			// ID
			JsonPrimitive id = task.params.get("id").getAsJsonPrimitive();
			if (id.isNumber()) {
				commerce.setId(id.getAsNumber());
			} else {
				commerce.setId(id.getAsString());
			}

			// Affiliation
			JsonPrimitive affiliation = task.params.get("affiliation").getAsJsonPrimitive();
			if (affiliation.isNumber()) {
				commerce.setId(affiliation.getAsNumber());
			} else {
				commerce.setId(affiliation.getAsString());
			}
			
			// Revenue
			commerce.setRevenue(task.params.get("revenue").getAsNumber());
			
			// Shipping
			commerce.setShipping(task.params.get("shipping").getAsNumber());
			
			// Tax
			commerce.setTax(task.params.get("tax").getAsNumber());

			// Currency
			commerce.setCurrency(task.params.get("currency").getAsString());

			// Items
			JsonArray items = task.params.get("items").getAsJsonArray();
			Iterator<JsonElement> it = items.iterator();
			while(it.hasNext()) {
				JsonObject item = it.next().getAsJsonObject();
				commerce.addItem(new CommerceExtendedData.Item(item.toString()));
			}
			
			JsonParser parser = new JsonParser();
			JsonObject commerceJsonObject = (JsonObject)parser.parse(commerce.toString());
			JsonObject wrapper = new JsonObject();
			wrapper.add("commerce", commerceJsonObject);
			task.success(wrapper);
		} catch (Exception e) {
			task.error(e);
		}
	}

	public static void makeExtendedDataCommerceItem(final ForgeTask task) {
		Log.e("makeExtendedDataCommerceItem(\"%s\"", task.params.toString());
		try {
			CommerceExtendedData.Item item = new CommerceExtendedData.Item();

			// ID
			JsonPrimitive id = task.params.get("id").getAsJsonPrimitive();
			if (id.isNumber()) {
				item.setId(id.getAsNumber());
			} else {
				item.setId(id.getAsString());
			}

			// Name
			JsonPrimitive name = task.params.get("name").getAsJsonPrimitive();
			if (name.isNumber()) {
				item.setName(name.getAsNumber());
			} else {
				item.setName(name.getAsString());
			}
			
			// Category
			item.setCategory(task.params.get("category").getAsString());

			// Price
			item.setPrice(task.params.get("category").getAsNumber());
			
			// Quantity
			item.setQuantity(task.params.get("quantity").getAsNumber());
			
			// Currency
			item.setCurrency(task.params.get("currency").getAsString());

			JsonParser parser = new JsonParser();
			JsonObject commerceItemJsonObject = (JsonObject)parser.parse(item.toString());
			task.success(commerceItemJsonObject);
		} catch (Exception e) {
			task.error(e);
		}
	}


	// ************************************************************************************************************************************************
	// Events
	// ************************************************************************************************************************************************

	public static void engage(final ForgeTask task, @ForgeParam("event") final String event, @ForgeParam("customData") final JsonObject customData, @ForgeParam("extendedData") final JsonArray extendedData) {
		Log.e("Engage(\"%s\", \"%s\", \"%s\")", event, customData, extendedData);
		task.performUI(new Runnable() {
			/**
			 * 
			 */
			public void run() {
				
				Map<String, Object> customDataMap = new HashMap<String, Object>();
				if (customData != null) {
					Set<Map.Entry<String, JsonElement>> entrySet = customData.entrySet();
					if (entrySet != null) {
						Iterator<Map.Entry<String, JsonElement>> it = entrySet.iterator();
						while (it.hasNext()) {
							Map.Entry<String, JsonElement> next = it.next();
							String key = next.getKey();
							JsonElement jsonElement = next.getValue();
							if (jsonElement.isJsonPrimitive()) {
								JsonPrimitive primitive = jsonElement.getAsJsonPrimitive();
								Object value = null;
								if (primitive.isBoolean()) {
									value = primitive.getAsBoolean();
								} else if (primitive.isNumber()) {
									value = primitive.getAsNumber();
								} else if (primitive.isString()) {
									value = primitive.getAsString();
								}
								if (value != null) {
									customDataMap.put(key, value);
								}
							} else {
								Log.w("CustomData cannot contain nested arrays or objects.");
							}
						}
					}
				}


				List<ExtendedData> extendedDataList = new ArrayList<ExtendedData>();

				if (extendedData != null) {
					Log.e("extendedData was supplied.");
					Iterator<JsonElement> it = extendedData.iterator();
					while (it.hasNext()) {
						Log.e("Got a piece of extendedData.");
						JsonObject wrapperObject = it.next().getAsJsonObject();
						if (wrapperObject.has(ExtendedData.Type.time.name())) {
							Log.e("Got a TimeExtendedData.");
							try {
								JsonObject timeObject = wrapperObject.get(ExtendedData.Type.time.name()).getAsJsonObject();
								TimeExtendedData time = new TimeExtendedData(timeObject.toString());
								extendedDataList.add(time);
							} catch (Exception e) {
								Log.e("Error parsing Extended Data.", e);
							}
						} else if (wrapperObject.has(ExtendedData.Type.location.name())) {
							Log.e("Got a LocationExtendedData.");
							try {
								JsonObject locationObject = wrapperObject.get(ExtendedData.Type.location.name()).getAsJsonObject();
								LocationExtendedData location = new LocationExtendedData (locationObject.toString());
								extendedDataList.add(location);
							} catch (Exception e) {
								Log.e("Error parsing Extended Data.", e);
							}
						} else if (wrapperObject.has(ExtendedData.Type.commerce.name())) {
							Log.e("Got a CommerceExtendedData.");
							try {
								JsonObject commerceObject = wrapperObject.get(ExtendedData.Type.commerce.name()).getAsJsonObject();
								CommerceExtendedData commerce = new CommerceExtendedData (commerceObject.toString());
								extendedDataList.add(commerce);
							} catch (Exception e) {
								Log.e("Error parsing Extended Data.", e);
							}
						}
					}
				}
				boolean invokedInteraction = Apptentive.engage(ForgeApp.getActivity(), event, customDataMap, extendedDataList.toArray(new ExtendedData[extendedDataList.size()]));
				task.success(new JsonPrimitive(invokedInteraction));
			}
		});
	}


	// ************************************************************************************************************************************************
	// Message Center
	// ************************************************************************************************************************************************

	public static void showMessageCenter(final ForgeTask task) {
		task.performUI(new Runnable() {
			public void run() {
				Apptentive.showMessageCenter(ForgeApp.getActivity());
				task.success();
			}
		});
	}

	public static void getUnreadMessageCount(final ForgeTask task) {
		int count = Apptentive.getUnreadMessageCount(ForgeApp.getActivity());
		task.success(new JsonPrimitive(count));
	}
	
	// ************************************************************************************************************************************************
	// DEBUG
	// These are debug methods. They are not intended for use in a deployed application. They are only for development and testing purposes.
	// ************************************************************************************************************************************************

	// getApiKey()?
	// setApiKey()?
	// getInitialUserName()?
	// setInitialUserName()?
	// getInitialUserEmailAddress()?

	public static void showAlert(final ForgeTask task, @ForgeParam("text") final String text) {
		if (text.length() == 0) {
			// Error if there is no text to show
			task.error("No text entered");
			return;
		}
		task.performUI(new Runnable() {
			public void run() {
				AlertDialog.Builder builder = new AlertDialog.Builder(ForgeApp.getActivity());
				builder.setMessage(text).setCancelable(false).setPositiveButton("Ok", new DialogInterface.OnClickListener() {
					public void onClick(DialogInterface dialog, int which) {
						task.success();
					}
				});
				AlertDialog alert = builder.create();
				alert.show();
			}
		});
	}
}
