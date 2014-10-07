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

///---------------------------------
/// @name Basic Usage
///---------------------------------

/**
 API key and App Store ID are set automatically from module config.
 */

///---------------------------------
/// @name Interface Customization
///---------------------------------

+ (void)setShowEmailField:(ForgeTask *)task showEmailField:(NSNumber *)showEmailField;

+ (void)setCustomPlaceholderText:(ForgeTask *)task customPlaceholderText:(NSString *)customPlaceholderText;

+ (void)setInitiallyUseMessageCenter:(ForgeTask *)task initiallyUseMessageCenter:(NSNumber *)initiallyUseMessageCenter;

+ (void)setInitiallyHideBranding:(ForgeTask *)task initiallyHideBranding:(NSNumber *)initiallyHideBranding;

+ (void)setTintColor:(ForgeTask *)task red:(NSNumber *)red green:(NSNumber *)green blue:(NSNumber *)blue alpha:(NSNumber *)alpha;

///--------------------
/// @name Presenting UI
///--------------------

+ (void)showMessageCenter:(ForgeTask *)task;
+ (void)showMessageCenterWithCustomData:(ForgeTask *)task customData:(NSDictionary *)customData;
+ (void)getUnreadMessageCount:(ForgeTask *)task;

+ (void)engage:(ForgeTask *)task event:(NSString *)event;
+ (void)engage:(ForgeTask *)task event:(NSString *)event customData:(NSDictionary *)customData;
+ (void)engage:(ForgeTask *)task event:(NSString *)event customData:(NSDictionary *)customData extendedData:(NSArray *)extendedData;

///-------------------------------
/// @name Extended Data for Events
///-------------------------------


///-------------------------------------
/// @name Attach Text, Images, and Files
///-------------------------------------


///---------------------------------------
/// @name Add Custom Device or Person Data
///---------------------------------------

+ (void)setInitialUserName:(ForgeTask *)task initialUserName:(NSString *)initialUserName;
+ (void)setInitialUserEmailAddress:(ForgeTask *)task initialUserEmailAddress:(NSString *)initialUserEmailAddress;

+ (void)addCustomPersonData:(ForgeTask *)task key:(NSString *)key value:(NSObject<NSCoding> *)value;
+ (void)removeCustomPersonData:(ForgeTask *)task key:(NSString *)key;

+ (void)addCustomDeviceData:(ForgeTask *)task key:(NSString *)key value:(NSObject<NSCoding> *)value;
+ (void)removeCustomDeviceData:(ForgeTask *)task key:(NSString *)key;

///---------------------------------
/// @name Open App Store
///---------------------------------

+ (void)openAppStore:(ForgeTask *)task;

///------------------------------------
/// @name Integrate With Other Services
///------------------------------------

@end
