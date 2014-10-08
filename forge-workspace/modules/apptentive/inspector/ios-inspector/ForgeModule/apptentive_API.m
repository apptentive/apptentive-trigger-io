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

///---------------------------------
/// @name Basic Usage
///---------------------------------

/**
 API key and App Store ID are set automatically from module config.
 */

///---------------------------------
/// @name Interface Customization
///---------------------------------

+ (void)setShowEmailField:(ForgeTask *)task showEmailField:(NSNumber *)showEmailField {
    [[ATConnect sharedConnection] setShowEmailField:[showEmailField boolValue]];
    [task success:nil];
}

+ (void)setCustomPlaceholderText:(ForgeTask *)task customPlaceholderText:(NSString *)customPlaceholderText {
    [[ATConnect sharedConnection] setCustomPlaceholderText:customPlaceholderText];
    [task success:nil];
}

+ (void)setInitiallyUseMessageCenter:(ForgeTask *)task initiallyUseMessageCenter:(NSNumber *)initiallyUseMessageCenter {
    [[ATConnect sharedConnection] setInitiallyUseMessageCenter:[initiallyUseMessageCenter boolValue]];
    [task success:nil];
}

+ (void)setInitiallyHideBranding:(ForgeTask *)task initiallyHideBranding:(NSNumber *)initiallyHideBranding {
    [[ATConnect sharedConnection] setInitiallyHideBranding:[initiallyHideBranding boolValue]];
    [task success:nil];
}

+ (void)setTintColor:(ForgeTask *)task red:(NSNumber *)red green:(NSNumber *)green blue:(NSNumber *)blue alpha:(NSNumber *)alpha  {
    UIColor *tintColor = [UIColor colorWithRed:[red floatValue] green:[green floatValue] blue:[blue floatValue] alpha:[alpha floatValue]];
    [[ATConnect sharedConnection] setTintColor:tintColor];
    [task success:nil];
}

///--------------------
/// @name Presenting UI
///--------------------

+ (void)showMessageCenter:(ForgeTask *)task {
    [[ATConnect sharedConnection] presentMessageCenterFromViewController:[[ForgeApp sharedApp] viewController]];
    [task success:nil];
}

+ (void)showMessageCenterWithCustomData:(ForgeTask *)task customData:(NSDictionary *)customData {
    [[ATConnect sharedConnection] presentMessageCenterFromViewController:[[ForgeApp sharedApp] viewController] withCustomData:customData];
    [task success:nil];
}

+ (void)getUnreadMessageCount:(ForgeTask *)task {
    NSUInteger unreadMessageCount = [[ATConnect sharedConnection] unreadMessageCount];
    [task success:[NSNumber numberWithInteger:unreadMessageCount]];
}

+ (void)engage:(ForgeTask *)task event:(NSString *)event {
    BOOL didEngage = [[ATConnect sharedConnection] engage:event fromViewController:[[ForgeApp sharedApp] viewController]];
    [task success:@(didEngage)];
}

+ (void)engage:(ForgeTask *)task event:(NSString *)event customData:(NSDictionary *)customData {
    BOOL didEngage = [[ATConnect sharedConnection] engage:event withCustomData:customData fromViewController:[[ForgeApp sharedApp] viewController]];
    [task success:@(didEngage)];
}

+ (void)engage:(ForgeTask *)task event:(NSString *)event customData:(NSDictionary *)customData extendedData:(NSArray *)extendedData {
    BOOL didEngage = [[ATConnect sharedConnection] engage:event withCustomData:customData withExtendedData:extendedData fromViewController:[[ForgeApp sharedApp] viewController]];
    [task success:@(didEngage)];
}

///-------------------------------
/// @name Extended Data for Events
///-------------------------------

+ (void)extendedDataDate:(ForgeTask *)task timeIntervalSince1970:(NSNumber *)timeInterval {
    NSDate *date = [NSDate dateWithTimeIntervalSince1970:[timeInterval doubleValue]];
    NSDictionary *extendedData = [ATConnect extendedDataDate:date];
    [task success:extendedData];
}

+ (void)extendedDataLocation:(ForgeTask *)task latitude:(NSNumber *)latitude longitude:(NSNumber *)longitude {
    NSDictionary *extendedData = [ATConnect extendedDataLocationForLatitude:[latitude doubleValue] longitude:[longitude doubleValue]];
    [task success:extendedData];
}

+ (void)extendedDataCommerce:(ForgeTask *)task
               transactionID:(NSString *)transactionID
                 affiliation:(NSString *)affiliation
                     revenue:(NSNumber *)revenue
                    shipping:(NSNumber *)shipping
                         tax:(NSNumber *)tax
                    currency:(NSString *)currency
               commerceItems:(NSArray *)commerceItems
{
    NSDictionary *extendedData = [ATConnect extendedDataCommerceWithTransactionID:transactionID affiliation:affiliation revenue:revenue shipping:shipping tax:tax currency:currency commerceItems:commerceItems];
    [task success:extendedData];
}

+ (void)extendedDataCommerceItem:(ForgeTask *)task
                          itemID:(NSString *)itemID
                            name:(NSString *)name
                        category:(NSString *)category
                           price:(NSNumber *)price
                        quantity:(NSNumber *)quantity
                        currency:(NSString *)currency
{
    NSDictionary *extendedData = [ATConnect extendedDataCommerceItemWithItemID:itemID name:name category:category price:price quantity:quantity currency:currency];
    [task success:extendedData];
}

///-------------------------------------
/// @name Attach Text, Images, and Files
///-------------------------------------

- (void)sendAttachment:(ForgeTask *)task text:(NSString *)text {
    [[ATConnect sharedConnection] sendAttachmentText:text];
    [task success:nil];
}

- (void)sendAttachment:(ForgeTask *)task imagePath:(NSString *)imagePath {
    UIImage *image = [UIImage imageWithContentsOfFile:imagePath];
    [[ATConnect sharedConnection] sendAttachmentImage:image];
    [task success:nil];
}

- (void)sendAttachment:(ForgeTask *)task filePath:(NSString *)filePath mimeType:(NSString *)mimeType {
    NSData *fileData = [NSData dataWithContentsOfFile:filePath];
    [[ATConnect sharedConnection] sendAttachmentFile:fileData withMimeType:mimeType];
    [task success:nil];
}

///---------------------------------------
/// @name Add Custom Device or Person Data
///---------------------------------------

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

///---------------------------------
/// @name Open App Store
///---------------------------------

+ (void)openAppStore:(ForgeTask *)task {
    [[ATConnect sharedConnection] openAppStore];
    [task success:nil];
}

///------------------------------------
/// @name Integrate With Other Services
///------------------------------------

@end
