package io.trigger.forge.android.modules.apptentive;

import java.util.HashSet;
import java.util.Set;

import com.apptentive.android.sdk.Apptentive;
import com.apptentive.android.sdk.Log;
import com.apptentive.android.sdk.module.survey.OnSurveyFinishedListener;
import com.google.gson.JsonArray;
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
	// Initialization
	// ************************************************************************************************************************************************

	public static void setInitialUserEmailAddress(final ForgeTask task, @ForgeParam("initialUserEmailAddress") final String initialUserEmailAddress) {
		Apptentive.setUserEmail(initialUserEmailAddress);
		task.success();
	}
	
	public static void addCustomDeviceData(final ForgeTask task, @ForgeParam("key") final String key, @ForgeParam("value") final String value) {
		Apptentive.addCustomDeviceData(ForgeApp.getActivity(), key, value);
	}
	
	public static void removeCustomDeviceData(final ForgeTask task, @ForgeParam("key") final String key) {
		Apptentive.removeCustomDeviceData(ForgeApp.getActivity(), key);
	}

	public static void addCustomPersonData(final ForgeTask task, @ForgeParam("key") final String key, @ForgeParam("value") final String value) {
		Apptentive.addCustomPersonData(ForgeApp.getActivity(), key, value);
	}
	
	public static void removeCustomPersonData(final ForgeTask task, @ForgeParam("key") final String key) {
		Apptentive.removeCustomPersonData(ForgeApp.getActivity(), key);
	}

	// ************************************************************************************************************************************************
	// Ratings
	// ************************************************************************************************************************************************

	public static void showRatingFlowIfConditionsAreMet(final ForgeTask task) {
		task.performUI(new Runnable() {
			public void run() {
				Apptentive.showRatingFlowIfConditionsAreMet(ForgeApp.getActivity());
			}
		});
	}

	public static void logSignificantEvent(final ForgeTask task) {
		Apptentive.logSignificantEvent(ForgeApp.getActivity());
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
	// Surveys
	// ************************************************************************************************************************************************
	
	public static void isSurveyAvailable(final ForgeTask task, @ForgeParam("tags") final JsonArray surveyTags) {
		Log.e("Tags: " + surveyTags.toString());
		String[] tags = new String[surveyTags.size()];
		for (int i = 0; i < surveyTags.size(); i++) {
			tags[i] = surveyTags.get(i).getAsString();
		}
		boolean available = Apptentive.isSurveyAvailable(ForgeApp.getActivity(), tags);
		task.success(available);
	}

	public static void showSurvey(final ForgeTask task, @ForgeParam("tags") final JsonArray surveyTags) {
		Log.e("Tags: " + surveyTags.toString());
		// Remove duplicates and empty string tags.
		Set<String> tagSet = new HashSet<String>();
		for (int i = 0; i < surveyTags.size(); i++) {
			String tag = surveyTags.get(i).getAsString();
			if(tag.length() > 0) {
				tagSet.add(tag);
			}
		}
		final String[] tags = tagSet.toArray(new String[]{});
		task.performUI(new Runnable() {
			public void run() {
				Apptentive.showSurvey(ForgeApp.getActivity(), new OnSurveyFinishedListener() {
					@Override
					public void onSurveyFinished(boolean completed) {
						Log.d("Firing apptentive.surveyFinishedsurvey event with parameter {%b}", completed);
						ForgeApp.event("apptentive.surveyFinished", new JsonPrimitive(completed));
					}
				}, tags);
			}
		});
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
