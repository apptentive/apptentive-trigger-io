//
//  ForgeViewController.h
//  ForgeCore
//
//  Created by Antoine van Gelder on 8/19/14.
//  Copyright (c) 2014 Trigger Corp. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface ForgeViewController : UIViewController {
	IBOutlet UIImageView *imageView;
	IBOutlet UIView *containingView;
	BOOL hasLoaded;
	@public BOOL forcePortrait;
}
- (void)loadInitialPage;
- (void)loadURL:(NSURL*)url;
- (BOOL)shouldAllowRequest:(NSURLRequest *)request;
+ (BOOL)isIPad;

@end
