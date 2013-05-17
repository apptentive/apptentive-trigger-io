//
//  apptentive_plugin_API.m
//  ForgeModule
//
//  Created by Peter Kamb on 5/16/13.
//  Copyright (c) 2013 Apptentive All rights reserved.
//

#import "apptentive_plugin_API.h"

@implementation apptentive_plugin_API

+ (void)succeed:(ForgeTask *)task
{
    [task success:@"Your task succeeded"];
}

+ (void)fail:(ForgeTask *)task
{
    [task error:@"Your task failed"];
}

+ (void)setDecelerationRate:(ForgeTask *)task decelerationRate:(NSNumber *)rate
{
    [[[ForgeApp sharedApp] webView] scrollView].decelerationRate = [rate floatValue];
    [task success:[NSString stringWithFormat:@"Set deceleration rate to %f", [rate floatValue]]];
}

@end
