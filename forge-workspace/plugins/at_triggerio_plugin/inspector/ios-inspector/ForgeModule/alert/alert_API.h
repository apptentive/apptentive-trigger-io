//
//  alert_API.h
//  ForgeInspector
//
//  Created by Connor Dunn on 27/07/2012.
//  Copyright (c) 2012 Trigger Corp. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface alert_API : NSObject

+ (void)show:(ForgeTask*)task text:(NSString *)text;

+ (void)succeed:(ForgeTask*)task;
+ (void)fail:(ForgeTask *)task;
+ (void)setDecelerationRate:(ForgeTask *)task decelerationRate:(NSNumber *)rate;

 @end
