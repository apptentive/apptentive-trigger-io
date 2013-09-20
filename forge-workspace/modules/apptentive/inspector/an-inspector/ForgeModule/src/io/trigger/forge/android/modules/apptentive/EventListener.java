package io.trigger.forge.android.modules.apptentive;

import com.apptentive.android.sdk.Apptentive;
import com.apptentive.android.sdk.Log;

import android.os.Bundle;
import io.trigger.forge.android.core.ForgeApp;
import io.trigger.forge.android.core.ForgeEventListener;

public class EventListener extends ForgeEventListener {
	@Override
	public void onStart() {
		Log.e("onStart()");
		ForgeApp.event("apptentive.foreground", null);
		Apptentive.onStart(ForgeApp.getActivity());
	}
	@Override
	public void onStop() {
		Log.e("onStop()");
		ForgeApp.event("apptentive.background", null);
		Apptentive.onStop(ForgeApp.getActivity());
	}
}
