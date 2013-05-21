//
//  apptentive_plugin_API.h
//  ForgeModule
//
//  Created by Peter Kamb on 5/16/13.
//  Copyright (c) 2013 Apptentive. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface apptentive_plugin_API : NSObject

{}
#pragma mark - Shared Features

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

+ (void)logSignificantEvent:(ForgeTask *)task;

#pragma mark - Surveys

+ (void)hasSurveyAvailableWithNoTags:(ForgeTask *)task;
+ (void)hasSurveyAvailableWithTags:(ForgeTask *)task tags:(NSSet *)tags;
+ (void)presentSurveyControllerWithNoTags:(ForgeTask *)task;
+ (void)presentSurveyControllerWithTags:(ForgeTask *)task tags:(NSSet *)tags;

@end
