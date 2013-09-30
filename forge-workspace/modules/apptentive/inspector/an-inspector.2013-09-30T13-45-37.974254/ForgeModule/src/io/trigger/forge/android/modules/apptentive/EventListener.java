package io.trigger.forge.android.modules.apptentive;

import com.apptentive.android.sdk.Apptentive;
import com.apptentive.android.sdk.Log;
import com.apptentive.android.sdk.module.messagecenter.UnreadMessagesListener;
import com.google.gson.JsonPrimitive;

import android.os.Bundle;
import io.trigger.forge.android.core.ForgeApp;
import io.trigger.forge.android.core.ForgeEventListener;

public class EventListener extends ForgeEventListener {
	@Override
	public void onStart() {
		Log.e("onStart()");
		ForgeApp.event("apptentive.onStart");
		Apptentive.onStart(ForgeApp.getActivity());
		Apptentive.setUnreadMessagesListener(new UnreadMessagesListener() {
			@Override
			public void onUnreadMessageCountChanged(int unreadMessages) {
				ForgeApp.event("apptentive.unreadMessageCountChanged", new JsonPrimitive(unreadMessages));
			}
		});
	}

	@Override
	public void onResume() {
		Log.e("onResume()");
		ForgeApp.event("apptentive.onResume");
	}

	@Override
	public void onPause() {
		Log.e("onPause()");
		ForgeApp.event("apptentive.onPause");
	}

	@Override
	public void onStop() {
		Log.e("onStop()");
		ForgeApp.event("apptentive.onStop");
		Apptentive.onStop(ForgeApp.getActivity());
	}

	@Override
	public void onWindowFocusChanged(boolean hasFocus) {
		super.onWindowFocusChanged(hasFocus);
		if (hasFocus) {
			ForgeApp.event("apptentive.windowFocused");
		}
	}
	
}
