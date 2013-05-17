//
//  alert_EventListener.m
//  ForgeInspector
//
//  Created by Connor Dunn on 09/10/2012.
//  Copyright (c) 2012 Trigger Corp. All rights reserved.
//

#import "alert_EventListener.h"

@implementation alert_EventListener

+ (void)applicationWillEnterForeground:(UIApplication *)application {
	[[ForgeApp sharedApp] event:@"alert.resume" withParam:nil];
}

@end
