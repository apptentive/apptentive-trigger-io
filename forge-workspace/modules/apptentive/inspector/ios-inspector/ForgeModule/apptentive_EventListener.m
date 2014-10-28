//
//  apptentive_EventListener.m
//  ForgeModule
//
//  Created by Peter Kamb on 8/7/13.
//  Copyright (c) 2013 Apptentive. All rights reserved.
//

#import "apptentive_EventListener.h"
#import "ATConnect.h"

@implementation apptentive_EventListener

+ (void)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    // Apptentive
    NSString *apiKey = [[[ForgeApp sharedApp] configForModule:@"apptentive"] objectForKey:@"API_Key"];
    [ATConnect sharedConnection].apiKey = apiKey;
    
    // Rating Flow
    NSString *appId = [[[ForgeApp sharedApp] configForModule:@"apptentive"] objectForKey:@"App_ID"];
    [ATConnect sharedConnection].appID = appId;
    
    // Message Center
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(unreadMessageCountChanged:) name:ATMessageCenterUnreadCountChangedNotification object:nil];
        
    // Survey Notifications
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(surveyWasSent:) name:ATSurveySentNotification object:nil];
    
    // Tint Color (#AARRGGBB)
    NSString *tintColor = [[[ForgeApp sharedApp] configForModule:@"apptentive"] objectForKey:@"iOS_Tint_Color"];
    if (tintColor && tintColor.length == 9 && [tintColor substringToIndex:1] isEqualToString:@"#") {
        unsigned rgbValue = 0;
        NSScanner *scanner = [NSScanner scannerWithString:hexString];
        [scanner setScanLocation:1]; // bypass '#' character
        [scanner scanHexInt:&rgbValue];
        CGFloat alpha = ((rgbValue & 0xFF000000) >> 24);
        CGFloat red = ((rgbValue & 0xFF0000) >> 16);
        CGFloat green = ((rgbValue & 0xFF00) >> 8);
        CGFloat blue = (rgbValue & 0xFF);
        UIColor *hexColor = [UIColor colorWithRed:red/255.0 green:green/255.0 blue:blue/255.0 alpha:alpha];
        [[ATConnect sharedConnection] setTintColor:hexColor];
    }
}

+ (void)unreadMessageCountChanged:(NSNotification *)notification
{
    [[ForgeApp sharedApp] event:@"apptentive.unreadMessageCountChanged" withParam:notification.userInfo];
}

+ (void)surveyWasSent:(NSNotification *)notification
{
    [[ForgeApp sharedApp] event:@"apptentive.surveyWasSent" withParam:notification.userInfo];
}

@end
