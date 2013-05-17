//
//  apptentive_plugin_EventListener.m
//  ForgeModule
//
//  Created by Peter Kamb on 5/17/13.
//  Copyright (c) 2013 Apptentive. All rights reserved.
//

#import "apptentive_plugin_EventListener.h"
#import "ATConnect.h"
#import "defines.h"

@implementation apptentive_plugin_EventListener

//https://trigger.io/docs/current/api/native_plugins/native/ios/Classes/ForgeEventListener.html

+ (void)applicationWillEnterForeground:(UIApplication *)application {
	[[ForgeApp sharedApp] event:@"alert.resume" withParam:nil];
}

+ (void)application:(UIApplication *)application preDidFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    ATConnect *connection = [ATConnect sharedConnection];
    //[[ATConnect sharedConnection] setApiKey:kApptentiveAPIKey];
    //[connection setShouldUseMessageCenter:YES];
}

@end
