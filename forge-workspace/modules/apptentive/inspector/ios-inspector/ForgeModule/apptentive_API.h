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

+ (void)setInitialUserName:(ForgeTask *)task initialUserName:(NSString *)initialUserName;
+ (void)setInitialUserEmailAddress:(ForgeTask *)task initialUserEmailAddress:(NSString *)initialUserEmailAddress;

+ (void)addCustomPersonData:(ForgeTask *)task key:(NSString *)key value:(NSObject<NSCoding> *)value;
+ (void)removeCustomPersonData:(ForgeTask *)task key:(NSString *)key;

+ (void)addCustomDeviceData:(ForgeTask *)task key:(NSString *)key value:(NSObject<NSCoding> *)value;
+ (void)removeCustomDeviceData:(ForgeTask *)task key:(NSString *)key;

#pragma mark - Message Center

+ (void)showMessageCenter:(ForgeTask *)task;
+ (void)showMessageCenterWithCustomData:(ForgeTask *)task customData:(NSDictionary *)customData;
+ (void)getUnreadMessageCount:(ForgeTask *)task;

#pragma mark - Engagement

+ (void)engage:(ForgeTask *)task codePoint:(NSString *)codePoint;

@end
