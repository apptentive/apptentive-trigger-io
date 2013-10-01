//
//  apptentive_API.h
//  ForgeModule
//
//  Created by Peter Kamb on 8/7/13.
//  Copyright (c) 2013 Apptentive. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface apptentive_API : NSObject

{}
#pragma mark - Apptentive Shared Features

+ (void)setApiKey:(ForgeTask *)task apiKey:(NSString *)apiKey;

+ (void)setInitialUserName:(ForgeTask *)task initialUserName:(NSString *)initialUserName;

+ (void)setInitialUserEmailAddress:(ForgeTask *)task initialUserEmailAddress:(NSString *)initialUserEmailAddress;

+ (void)addCustomPersonData:(ForgeTask *)task object:(NSObject<NSCoding> *)object key:(NSString *)key;
+ (void)removeCustomPersonData:(ForgeTask *)task key:(NSString *)key;

+ (void)addCustomDeviceData:(ForgeTask *)task object:(NSObject<NSCoding> *)object key:(NSString *)key;
+ (void)removeCustomDeviceData:(ForgeTask *)task key:(NSString *)key;

#pragma mark - Message Center

+ (void)presentMessageCenter:(ForgeTask *)task;
+ (void)unreadMessageCount:(ForgeTask *)task;

#pragma mark - Ratings Flow

+ (void)setAppID:(ForgeTask *)task appID:(NSString *)appID;
+ (void)showRatingFlowIfConditionsAreMet:(ForgeTask *)task;
+ (void)logSignificantEvent:(ForgeTask *)task;

#pragma mark - Surveys

+ (void)hasSurveyAvailableWithNoTags:(ForgeTask *)task;
+ (void)hasSurveyAvailableWithTags:(ForgeTask *)task tags:(NSSet *)tags;
+ (void)presentSurveyControllerWithNoTags:(ForgeTask *)task;
+ (void)presentSurveyControllerWithTags:(ForgeTask *)task tags:(NSSet *)tags;

@end
