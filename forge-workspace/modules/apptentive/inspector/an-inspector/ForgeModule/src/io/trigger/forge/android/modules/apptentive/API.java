package io.trigger.forge.android.modules.apptentive;

import com.apptentive.android.sdk.Apptentive;
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
	
	// unreadMessageCount()?
	
	// Surveys
}
