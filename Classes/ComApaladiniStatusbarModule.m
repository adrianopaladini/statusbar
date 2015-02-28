/**
 * Your Copyright Here
 *
 * Appcelerator Titanium is Copyright (c) 2009-2010 by Appcelerator, Inc.
 * and licensed under the Apache Public License (version 2)
 */
#import "ComApaladiniStatusbarModule.h"
#import "TiBase.h"
#import "TiHost.h"
#import "TiUtils.h"

@implementation ComApaladiniStatusbarModule

MAKE_SYSTEM_PROP(NONE,0);
MAKE_SYSTEM_PROP(FADE,1);
MAKE_SYSTEM_PROP(SLIDE,2);

MAKE_SYSTEM_PROP(BLACK,0);
MAKE_SYSTEM_PROP(WHITE,1);


#pragma mark Internal

// this is generated for your module, please do not change it
-(id)moduleGUID
{
	return @"32bb0cde-76e5-451f-8718-888aaeb346b9";
}

// this is generated for your module, please do not change it
-(NSString*)moduleId
{
	return @"com.apaladini.statusbar";
}

#pragma mark Lifecycle

-(void)startup
{
	// this method is called when the module is first loaded
	// you *must* call the superclass
	[super startup];
	
	NSLog(@"[INFO] %@ loaded",self);
}

-(void)shutdown:(id)sender
{
	// this method is called when the module is being unloaded
	// typically this is during shutdown. make sure you don't do too
	// much processing here or the app will be quit forceably
	
	// you *must* call the superclass
	[super shutdown:sender];
}

#pragma mark Cleanup 

-(void)dealloc
{
	// release any resources that have been retained by the module
	[super dealloc];
}

#pragma mark Internal Memory Management

-(void)didReceiveMemoryWarning:(NSNotification*)notification
{
	// optionally release any resources that can be dynamically
	// reloaded once memory is available - such as caches
	[super didReceiveMemoryWarning:notification];
}

#pragma mark Listener Notifications

-(void)_listenerAdded:(NSString *)type count:(int)count
{
	if (count == 1 && [type isEqualToString:@"my_event"])
	{
		// the first (of potentially many) listener is being added 
		// for event named 'my_event'
	}
}

-(void)_listenerRemoved:(NSString *)type count:(int)count
{
	if (count == 0 && [type isEqualToString:@"my_event"])
	{
		// the last listener called for event named 'my_event' has
		// been removed, we can optionally clean up any resources
		// since no body is listening at this point for that event
	}
}



#pragma Public APIs




-(void)hide:(id)args
{
    ENSURE_SINGLE_ARG_OR_NIL(args,NSDictionary);
    ENSURE_UI_THREAD(hide,args);
    
    int style = [TiUtils intValue:@"animationStyle" properties:args def:UIStatusBarAnimationSlide];
    [[UIApplication sharedApplication] setStatusBarHidden:YES withAnimation:style];
}


-(void)show:(id)args
{
    ENSURE_SINGLE_ARG_OR_NIL(args,NSDictionary);
    ENSURE_UI_THREAD(show,args);

    int style = [TiUtils intValue:@"animationStyle" properties:args def:UIStatusBarAnimationSlide];
    [[UIApplication sharedApplication] setStatusBarHidden:NO withAnimation:style];
}


-(void)setStyle:(NSNumber *)style
{
	ENSURE_UI_THREAD(setStyle,style);
	[[UIApplication sharedApplication] setStatusBarStyle:[style intValue]];
}


@end
