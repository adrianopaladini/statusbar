/**
 * Your Copyright Here
 *
 * Appcelerator Titanium is Copyright (c) 2009-2010 by Appcelerator, Inc.
 * and licensed under the Apache Public License (version 2)
 */
#import "TiModule.h"

@interface ComApaladiniStatusbarModule : TiModule
{
}

//API
-(void)hide:(id)args;
-(void)show:(id)args;
-(void)setStyle:(NSNumber *)style;

@end
