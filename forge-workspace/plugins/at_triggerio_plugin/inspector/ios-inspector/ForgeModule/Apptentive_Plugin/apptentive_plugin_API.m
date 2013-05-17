//
//  apptentive_plugin_API.m
//  ForgeModule
//
//  Created by Peter Kamb on 5/16/13.
//  Copyright (c) 2013 Apptentive All rights reserved.
//

#import "apptentive_plugin_API.h"
#import "ATConnect.h"

@implementation apptentive_plugin_API

+ (void)initialName:(ForgeTask *)task
{
    NSString *initialName =  [[ATConnect sharedConnection] initialName];
    [task success:initialName];
}

+ (void)setInitialName:(ForgeTask *)task initialName:(NSString *)initialName
{
    [[ATConnect sharedConnection] setInitialName:initialName];
    [task success:initialName];
}

+ (void)initialEmailAddress:(ForgeTask *)task
{
    NSString *initialEmailAddress =  [[ATConnect sharedConnection] initialEmailAddress];
    [task success:initialEmailAddress];
}

+ (void)setInitialEmailAddress:(ForgeTask *)task initialEmailAddress:(NSString *)initialEmailAddress
{
    [[ATConnect sharedConnection] setInitialEmailAddress:initialEmailAddress];
    [task success:initialEmailAddress];
}

+ (void)unreadMessageCount:(ForgeTask *)task
{
    NSUInteger *unreadMessageCount = [[ATConnect sharedConnection] unreadMessageCount];
    [task success:[NSNumber numberWithInteger:unreadMessageCount]];
}

@end
