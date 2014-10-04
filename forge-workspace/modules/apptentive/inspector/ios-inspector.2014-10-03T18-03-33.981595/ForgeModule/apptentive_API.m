//
//  apptentive_API.m
//  ForgeModule
//
//  Created by Peter Kamb on 8/7/13.
//  Copyright (c) 2013 Apptentive. All rights reserved.
//

#import "apptentive_API.h"
#import "ATConnect.h"

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

+ (void)showMessageCenterWithCustomData:(ForgeTask *)task customData:(NSDictionary *)customData
{
    [[ATConnect sharedConnection] presentMessageCenterFromViewController:[[ForgeApp sharedApp] viewController] withCustomData:customData];
    [task success:nil];
}

+ (void)getUnreadMessageCount:(ForgeTask *)task
{
    NSUInteger unreadMessageCount = [[ATConnect sharedConnection] unreadMessageCount];
    [task success:[NSNumber numberWithInteger:unreadMessageCount]];
}

#pragma mark - Engagement

+ (void)engage:(ForgeTask *)task codePoint:(NSString *)codePoint
{
    [[ATConnect sharedConnection] engage:codePoint fromViewController:[[ForgeApp sharedApp] viewController]];
    [task success:nil];
}

@end