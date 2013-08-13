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

+ (void)apiKey:(ForgeTask *)task
{
    NSString *apiKey = [[ATConnect sharedConnection] apiKey];
    [task success:apiKey];
}

+ (void)setApiKey:(ForgeTask *)task apiKey:(NSString *)apiKey
{
    [[ATConnect sharedConnection] setApiKey:apiKey];
    [task success:nil];
}

+ (void)initialUserName:(ForgeTask *)task
{
    NSString *initialUserName = [[ATConnect sharedConnection] initialUserName];
    [task success:initialUserName];
}

+ (void)setInitialUserName:(ForgeTask *)task initialUserName:(NSString *)initialUserName
{
    [[ATConnect sharedConnection] setInitialUserName:initialUserName];
    [task success:nil];
}

+ (void)initialUserEmailAddress:(ForgeTask *)task
{
    NSString *initialUserEmailAddress = [[ATConnect sharedConnection] initialUserEmailAddress];
    [task success:initialUserEmailAddress];
}

+ (void)setInitialUserEmailAddress:(ForgeTask *)task initialUserEmailAddress:(NSString *)initialUserEmailAddress
{
    [[ATConnect sharedConnection] setInitialUserEmailAddress:initialUserEmailAddress];
    [task success:nil];
}

+ (void)addCustomData:(ForgeTask *)task object:(NSObject<NSCoding> *)object key:(NSString *)key
{
    [[ATConnect sharedConnection] addCustomData:object withKey:key];
    [task success:nil];
}

+ (void)removeCustomData:(ForgeTask *)task key:(NSString *)key
{
    [[ATConnect sharedConnection] removeCustomDataWithKey:key];
    [task success:nil];
}

#pragma mark - Message Center

+ (void)presentMessageCenter:(ForgeTask *)task
{
    [[ATConnect sharedConnection] presentMessageCenterFromViewController:[[ForgeApp sharedApp] viewController]];
    [task success:nil];
}

+ (void)unreadMessageCount:(ForgeTask *)task
{
    NSUInteger *unreadMessageCount = [[ATConnect sharedConnection] unreadMessageCount];
    [task success:[NSNumber numberWithInteger:unreadMessageCount]];
}

#pragma mark - Ratings Flow

+ (void)appID:(ForgeTask *)task
{
    NSString *appID = [[ATAppRatingFlow sharedRatingFlow] appID];
    [task success:appID];
}

+ (void)setAppID:(ForgeTask *)task appID:(NSString *)appID
{
    [[ATAppRatingFlow sharedRatingFlow] setAppID:appID];
    [task success:nil];
}

+ (void)appName:(ForgeTask *)task
{
    NSString *appName = [[ATAppRatingFlow sharedRatingFlow] appName];
    [task success:appName];
}

+ (void)setAppName:(ForgeTask *)task appName:(NSString *)appName
{
    [[ATAppRatingFlow sharedRatingFlow] setAppName:appName];
    [task success:nil];
}

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

+ (void)hasSurveyAvailableWithNoTags:(ForgeTask *)task
{
    BOOL hasSurvey = [ATSurveys hasSurveyAvailableWithNoTags];
    [task success:[NSNumber numberWithBool:hasSurvey]];
}

+ (void)hasSurveyAvailableWithTags:(ForgeTask *)task tags:(NSArray *)tags
{
    BOOL hasSurvey = [ATSurveys hasSurveyAvailableWithTags:[NSSet setWithArray:tags]];
    [task success:[NSNumber numberWithBool:hasSurvey]];
}

+ (void)presentSurveyControllerWithNoTags:(ForgeTask *)task
{
    [ATSurveys presentSurveyControllerWithNoTagsFromViewController:[[ForgeApp sharedApp] viewController]];
    [task success:nil];
}

+ (void)presentSurveyControllerWithTags:(ForgeTask *)task tags:(NSArray *)tags
{
    [ATSurveys presentSurveyControllerWithTags:[NSSet setWithArray:tags] fromViewController:[[ForgeApp sharedApp] viewController]];
    [task success:nil];
}

@end
