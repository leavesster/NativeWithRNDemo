//
//  NativeViewController.m
//  NativeWithRNDemo
//
//  Created by leavesster on 02/15/2017.
//  Copyright (c) 2017 leavesster. All rights reserved.
//

#import "NativeViewController.h"
#import <React/RCTRootView.h>

@interface NativeViewController ()

@end

@implementation NativeViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
    [self setupReactNativeView];
}

- (void)setupReactNativeView
{
    NSString * strUrl = @"http://localhost:8081/index.ios.bundle?platform=ios&dev=true";
    NSURL * jsCodeLocation = [NSURL URLWithString:strUrl];
    
    RCTRootView *rnView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation moduleName:@"ReactNativeDemo" initialProperties:nil launchOptions:nil];
    rnView.frame = self.view.bounds;
    [self.view addSubview:rnView];
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
