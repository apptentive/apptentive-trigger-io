//
//  alert_API.m
//  ForgeInspector
//
//  Created by Connor Dunn on 27/07/2012.
//  Copyright (c) 2012 Trigger Corp. All rights reserved.
//

#import "alert_API.h"

@implementation alert_API

+ (void)show:(ForgeTask*)task text:(NSString *)text {
	if ([text length] == 0) {
		[task error:@"You must enter a message"];
		return;
	}
	UIAlertView *alert = [[UIAlertView alloc] initWithTitle:@"Alert"
													message:text
												   delegate:nil
										  cancelButtonTitle:@"OK"
										  otherButtonTitles:nil];
	[alert show];
	[task success:nil];
}

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
