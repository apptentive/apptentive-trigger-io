//
//  apptentive_module_API.h
//  ForgeModule
//
//  Created by Peter Kamb on 8/7/13.
//  Copyright (c) 2013 Apptentive. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface apptentive_module_API : NSObject

{}
#pragma mark - Apptentive Shared Features

+ (void)apiKey:(ForgeTask *)task;
+ (void)setApiKey:(ForgeTask *)task apiKey:(NSString *)apiKey;

+ (void)initialUserName:(ForgeTask *)task;
+ (void)setInitialUserName:(ForgeTask *)task initialUserName:(NSString *)initialUserName;

+ (void)initialUserEmailAddress:(ForgeTask *)task;
+ (void)setInitialUserEmailAddress:(ForgeTask *)task initialUserEmailAddress:(NSString *)initialUserEmailAddress;

+ (void)addCustomData:(ForgeTask *)task object:(NSObject<NSCoding> *)object key:(NSString *)key;
+ (void)removeCustomData:(ForgeTask *)task key:(NSString *)key;

#pragma mark - Message Center

+ (void)presentMessageCenter:(ForgeTask *)task;
+ (void)unreadMessageCount:(ForgeTask *)task;

#pragma mark - Ratings Flow

+ (void)appID:(ForgeTask *)task;
+ (void)setAppID:(ForgeTask *)task appID:(NSString *)appID;
+ (void)appName:(ForgeTask *)task;
+ (void)setAppName:(ForgeTask *)task appName:(NSString *)appName;
+ (void)showRatingFlowIfConditionsAreMet:(ForgeTask *)task;
+ (void)logSignificantEvent:(ForgeTask *)task;

#pragma mark - Surveys

+ (void)hasSurveyAvailableWithNoTags:(ForgeTask *)task;
+ (void)hasSurveyAvailableWithTags:(ForgeTask *)task tags:(NSSet *)tags;
+ (void)presentSurveyControllerWithNoTags:(ForgeTask *)task;
+ (void)presentSurveyControllerWithTags:(ForgeTask *)task tags:(NSSet *)tags;

@end
