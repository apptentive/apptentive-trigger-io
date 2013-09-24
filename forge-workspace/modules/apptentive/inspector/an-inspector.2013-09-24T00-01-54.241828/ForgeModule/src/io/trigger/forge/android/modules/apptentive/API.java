package io.trigger.forge.android.modules.apptentive;

import java.util.Iterator;

import com.apptentive.android.sdk.Apptentive;
import com.apptentive.android.sdk.Log;
import com.apptentive.android.sdk.module.survey.OnSurveyFinishedListener;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonPrimitive;

import io.trigger.forge.android.core.ForgeApp;
import io.trigger.forge.android.core.ForgeParam;
import io.trigger.forge.android.core.ForgeTask;
import android.app.AlertDialog;
import android.content.DialogInterface;

public class API {

	// Test

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
	
	// Common

	// getApiKey()?
	// setApiKey()?
	// getInitialUserName()?
	// setInitialUserName()?
	// getInitialUserEmail()?

	public static void setInitialUserEmailAddress(final ForgeTask task, @ForgeParam("initialUserEmailAddress") final String initialUserEmailAddress) {
		Apptentive.setInitialUserEmail(initialUserEmailAddress);
		task.success();
	}
	
	public static void addCustomData(final ForgeTask task, @ForgeParam("key") final String key, @ForgeParam("value") final String value) {
		Apptentive.addCustomData(key, value);
	}
	
	public static void removeCustomData(final ForgeTask task, @ForgeParam("key") final String key) {
		Apptentive.removeCustomData(key);
	}

	// Ratings

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

	// Message Center

	public static void presentMessageCenter(final ForgeTask task) {
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

	// unreadMessageCount(): Handled by listening for apptentive.unreadMessageCountChanged event.

	// Surveys
	
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
		String[] tags = new String[surveyTags.size()];
		for (int i = 0; i < surveyTags.size(); i++) {
			tags[i] = surveyTags.get(i).getAsString();
		}
		Apptentive.showSurvey(ForgeApp.getActivity(), new OnSurveyFinishedListener() {
			@Override
			public void onSurveyFinished(boolean completed) {
				ForgeApp.event("apptentive.surveyFinished", new JsonPrimitive(completed));
			}
		}, tags);
	}
}
