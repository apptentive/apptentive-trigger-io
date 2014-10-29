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
import com.apptentive.android.sdk.model.ExtendedData;
import com.apptentive.android.sdk.module.survey.OnSurveyFinishedListener;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
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
	
	// ************************************************************************************************************************************************
	// Events
	// ************************************************************************************************************************************************

/*
	public static void engage(final ForgeTask task, @ForgeParam("event") final String event) {
		Log.e("Engage(\"%s\")", event);
		task.performUI(new Runnable() {
			public void run() {
				boolean invokedInteraction = Apptentive.engage(ForgeApp.getActivity(), event);
				task.success(new JsonPrimitive(invokedInteraction)); 
			}
		});
	}
*/

	public static void engage(final ForgeTask task, @ForgeParam("event") final String event, @ForgeParam("customData") final JsonObject customData, @ForgeParam("extendedData") final JsonArray extendedData) {
		Log.e("Engage(\"%s\", \"%s\", \"%s\")", event, customData, extendedData);
		task.performUI(new Runnable() {
			public void run() {
				
				Map<String, Object> customDataMap = new HashMap<String, Object>();
				List<ExtendedData> extendedDataList = new ArrayList<ExtendedData>();
				if (customData != null) { 
					Set<Map.Entry<String, JsonElement>> entrySet = customData.entrySet();
					if (entrySet != null) {
						Iterator<Map.Entry<String, JsonElement>> it = (Iterator<Map.Entry<String, JsonElement>>) entrySet.iterator();
						while(it.hasNext()) {
							Map.Entry<String, JsonElement> next = it.next();
							String key = next.getKey();
							JsonElement jsonElement = next.getValue();
							if (!jsonElement.isJsonPrimitive()) {
								Log.w("CustomData cannot contain nested arrays or objects.");
								continue;
							} else {
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
							}
						}
					}
				}
				boolean invokedInteraction = Apptentive.engage(ForgeApp.getActivity(), event, customDataMap);
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
