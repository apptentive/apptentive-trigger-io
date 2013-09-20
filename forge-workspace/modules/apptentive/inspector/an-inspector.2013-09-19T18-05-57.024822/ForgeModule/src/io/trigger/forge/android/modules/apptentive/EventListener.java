package io.trigger.forge.android.modules.apptentive;

import android.os.Bundle;
import io.trigger.forge.android.core.ForgeApp;
import io.trigger.forge.android.core.ForgeEventListener;

public class EventListener extends ForgeEventListener {
	@Override
	public void onCreate(Bundle savedInstanceState) {
		ForgeApp.event("apptentive.init", null);
	}

	@Override
	public void onStart() {
		ForgeApp.event("apptentive.start", null);
	}

	@Override
	public void onRestart() {
		ForgeApp.event("apptentive.resume", null);
	}

	@Override
	public void onStop() {
		ForgeApp.event("apptentive.stop", null);
	}
}
