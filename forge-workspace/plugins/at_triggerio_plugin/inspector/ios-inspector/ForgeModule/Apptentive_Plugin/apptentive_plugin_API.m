//
//  apptentive_plugin_API.m
//  ForgeModule
//
//  Created by Peter Kamb on 5/16/13.
//  Copyright (c) 2013 Apptentive All rights reserved.
//

#import "apptentive_plugin_API.h"
#import "ATConnect.h"
#import "ATAppRatingFlow.h"
#import "ATSurveys.h"

@implementation apptentive_plugin_API

{}
#pragma mark - Shared Features

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

//Trigger.io method parameters "can only be of type NSString, NSNumber, NSDictionary or NSArray"
//Thus we may need dedicated methods for each type, rather than `(NSObject<NSCoding> *)`
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

+ (void)hasSurveyAvailableWithTags:(ForgeTask *)task tags:(NSSet *)tags
{
    BOOL hasSurvey = [ATSurveys hasSurveyAvailableWithTags:tags];
    [task success:[NSNumber numberWithBool:hasSurvey]];
}

+ (void)presentSurveyControllerWithNoTags:(ForgeTask *)task
{
    [ATSurveys presentSurveyControllerWithNoTagsFromViewController:[[ForgeApp sharedApp] viewController]];
    [task success:nil];
}

+ (void)presentSurveyControllerWithTags:(ForgeTask *)task tags:(NSSet *)tags
{
    [ATSurveys presentSurveyControllerWithTags:tags fromViewController:[[ForgeApp sharedApp] viewController]];
    [task success:nil];
}

@end
