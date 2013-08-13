//
//  apptentive_EventListener.h
//  ForgeModule
//
//  Created by Peter Kamb on 8/7/13.
//  Copyright (c) 2013 Apptentive. All rights reserved.
//

#import <ForgeCore/ForgeCore.h>

@interface apptentive_EventListener : ForgeEventListener

+ (void)unreadMessageCountChanged:(NSNotification *)notification;
+ (void)surveyBecameAvailable:(NSNotification *)notification;
+ (void)surveyWasSent:(NSNotification *)notification;

@end
