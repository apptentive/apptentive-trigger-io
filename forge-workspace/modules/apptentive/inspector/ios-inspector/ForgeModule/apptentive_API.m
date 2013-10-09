//
//  apptentive_API.m
//  ForgeModule
//
//  Created by Peter Kamb on 8/7/13.
//  Copyright (c) 2013 Apptentive. All rights reserved.
//

#import "apptentive_API.h"
#import "ATConnect.h"
#import "ATAppRatingFlow.h"
#import "ATSurveys.h"

@implementation apptentive_API

{}
#pragma mark - Apptentive Shared Features

+ (void)setInitialUserName:(ForgeTask *)task initialUserName:(NSString *)initialUserName
{
    [[ATConnect sharedConnection] setInitialUserName:initialUserName];
    [task success:nil];
}

+ (void)setInitialUserEmailAddress:(ForgeTask *)task initialUserEmailAddress:(NSString *)initialUserEmailAddress
{
    [[ATConnect sharedConnection] setInitialUserEmailAddress:initialUserEmailAddress];
    [task success:nil];
}

+ (void)addCustomPersonData:(ForgeTask *)task key:(NSString *)key value:(NSObject<NSCoding> *)value
{
    [[ATConnect sharedConnection] addCustomPersonData:value withKey:key];
    [task success:nil];
}

+ (void)removeCustomPersonData:(ForgeTask *)task key:(NSString *)key
{
    [[ATConnect sharedConnection] removeCustomPersonDataWithKey:key];
    [task success:nil];
}

+ (void)addCustomDeviceData:(ForgeTask *)task key:(NSString *)key value:(NSObject<NSCoding> *)value
{
    [[ATConnect sharedConnection] addCustomDeviceData:value withKey:key];
    [task success:nil];
}

+ (void)removeCustomDeviceData:(ForgeTask *)task key:(NSString *)key
{
    [[ATConnect sharedConnection] removeCustomDeviceDataWithKey:key];
    [task success:nil];
}

#pragma mark - Message Center

+ (void)showMessageCenter:(ForgeTask *)task
{
    [[ATConnect sharedConnection] presentMessageCenterFromViewController:[[ForgeApp sharedApp] viewController]];
    [task success:nil];
}

+ (void)getUnreadMessageCount:(ForgeTask *)task
{
    NSUInteger unreadMessageCount = [[ATConnect sharedConnection] unreadMessageCount];
    [task success:[NSNumber numberWithInteger:unreadMessageCount]];
}

#pragma mark - Ratings Flow

+ (void)showRatingFlowIfConditionsAreMet:(ForgeTask *)task
{
    [[ATAppRatingFlow sharedRatingFlow] showRatingFlowFromViewControllerIfConditionsAreMet:[[ForgeApp sharedApp] viewController]];
    [task success:nil];
}

+ (void)logSignificantEvent:(ForgeTask *)task
{
    [[ATAppRatingFlow sharedRatingFlow] logSignificantEvent];
    [task success:nil];
}

#pragma mark - Surveys

+ (void)isSurveyAvailable:(ForgeTask *)task tags:(NSArray *)tags
{
    BOOL isSurveyAvailable;
    if (tags && tags.count > 0) {
        isSurveyAvailable = [ATSurveys hasSurveyAvailableWithTags:[NSSet setWithArray:tags]];
    } else {
        isSurveyAvailable = [ATSurveys hasSurveyAvailableWithNoTags];
    }
    [task success:[NSNumber numberWithBool:isSurveyAvailable]];
}

+ (void)showSurvey:(ForgeTask *)task tags:(NSArray *)tags
{
    if (tags && tags.count > 0) {
        [ATSurveys presentSurveyControllerWithTags:[NSSet setWithArray:tags] fromViewController:[[ForgeApp sharedApp] viewController]];
    } else {
        [ATSurveys presentSurveyControllerWithNoTagsFromViewController:[[ForgeApp sharedApp] viewController]];
    }
    [task success:nil];
}

@end
