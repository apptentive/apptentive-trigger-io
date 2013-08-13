//
//  apptentive_EventListener.m
//  ForgeModule
//
//  Created by Peter Kamb on 8/7/13.
//  Copyright (c) 2013 Apptentive. All rights reserved.
//

#import "apptentive_EventListener.h"
#import "ATConnect.h"
#import "ATAppRatingFlow.h"
#import "ATSurveys.h"

@implementation apptentive_EventListener

+ (void)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    //Shared
    ATConnect *connection __attribute__((unused)) = [ATConnect sharedConnection];
    
    //Message Center
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(unreadMessageCountChanged:) name:ATMessageCenterUnreadCountChangedNotification object:nil];
        
    //Survey Notifications
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(surveyBecameAvailable:) name:ATSurveyNewSurveyAvailableNotification object:nil];
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(surveyWasSent:) name:ATSurveySentNotification object:nil];
}

+ (void)unreadMessageCountChanged:(NSNotification *)notification
{
    [[ForgeApp sharedApp] event:@"apptentive.unreadMessageCountChanged" withParam:notification.userInfo];
}

+ (void)surveyBecameAvailable:(NSNotification *)notification
{
    [[ForgeApp sharedApp] event:@"apptentive.surveyBecameAvailable" withParam:notification.userInfo];
}

+ (void)surveyWasSent:(NSNotification *)notification
{
    [[ForgeApp sharedApp] event:@"apptentive.surveyWasSent" withParam:notification.userInfo];
}

@end
