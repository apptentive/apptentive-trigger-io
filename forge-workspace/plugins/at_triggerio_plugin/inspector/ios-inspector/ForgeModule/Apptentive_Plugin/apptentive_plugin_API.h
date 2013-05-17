//
//  apptentive_plugin_API.h
//  ForgeModule
//
//  Created by Peter Kamb on 5/16/13.
//  Copyright (c) 2013 Apptentive. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface apptentive_plugin_API : NSObject

+ (void)succeed:(ForgeTask*)task;
+ (void)fail:(ForgeTask *)task;

+ (void)setDecelerationRate:(ForgeTask *)task decelerationRate:(NSNumber *)rate;

@end
