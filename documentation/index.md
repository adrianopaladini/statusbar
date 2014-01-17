# Statusbar Module

## Description

Appcelerator deprecate functions 'hideStatusBar', 'showStatusBar' and 'setStatusBarStyle' on runtime.
This module gives you back the control over these functions on iOS 7.

## Accessing the statusbar Module

To access this module from JavaScript, you would do the following:

	var statusbar = require("com.widbook.statusbar");

The statusbar variable is a reference to the Module object.	

## IMPORTANT

### To this module work, your need to add in your tiapp.xml the following code:

    <ios>
        <plist>
    	    <dict>
        	    <key>UIViewControllerBasedStatusBarAppearance</key>
                <false/>
            </dict>
        </plist>
    </ios>


## Functions

### hide

Hide the status bar.

This function accept parameters:
	animated: True or False
    animationStyle:  0, 1 or 2

    0 = NONE
    1 = FADE
    2 = SLIDE


### show

Show the status bar.

This function accept parameters:
	animated: True or False
    animationStyle: 0, 1 or 2

    0 = NONE
    1 = FADE
    2 = SLIDE


### style

Set the color of status bar.
Style can be: 0 or 1

    0 = BLACK
    1 = WHITE

## Author

Adriano Paladini
