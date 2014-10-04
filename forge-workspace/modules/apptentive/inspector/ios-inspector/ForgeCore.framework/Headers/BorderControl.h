//
//  BorderControl.h
//  Forge
//
//  Created by Connor Dunn on 18/01/2012.
//  Copyright (c) 2012 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface BorderControl : NSObject {
}

+ (void)runTask:(NSDictionary *)data forWebView:(UIView*)webView;
+ (void)returnResult:(NSDictionary *)data toWebView:(UIView*)webView;
+ (void)addAPIMethod:(NSString *)jsMethod withClass:(NSString *)className andSelector:(NSString *)selector;
+ (NSDictionary*)getAPIMethodInfo;

@end
