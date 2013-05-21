//
//  apptentive_plugin_EventListener.h
//  ForgeModule
//
//  Created by Peter Kamb on 5/17/13.
//  Copyright (c) 2013 Apptentive. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface apptentive_plugin_EventListener : ForgeEventListener

+ (void)unreadMessageCountChanged:(NSNotification *)notification;
+ (void)surveyBecameAvailable:(NSNotification *)notification;
+ (void)surveyWasSent:(NSNotification *)notification;

@end
