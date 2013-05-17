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

+(void)unreadMessageCount:(ForgeTask *)task
{
    NSUInteger *unreadMessageCount = [[ATConnect sharedConnection] unreadMessageCount];
    [task success:[NSNumber numberWithInteger:unreadMessageCount]];
}

@end
