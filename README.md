# Statusbar Module

## Description

Appcelerator deprecate functions 'hideStatusBar', 'showStatusBar' and 'setStatusBarStyle' on runtime.
This module gives you back the control over these functions on iOS 7.

## Accessing the statusbar Module

To access this module from JavaScript, you would do the following:

```javascript
var statusbar = require("com.widbook.statusbar");
```

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

```javascript
statusbar.hide();
```
or

```javascript
statusbar.hide({animationStyle:statusbar.ANIMATION_FADE});
```

| input (constant) | Description | 
| ----- | ----------- |
| ANIMATION_NONE | No animation | 
| ANIMATION_FADE | Fading out | 
| ANIMATION_SLIDE (Default) | The statusbar will slide to top | 




### show

Show the status bar.

```javascript
statusbar.show();
```
or

```javascript
statusbar.show({animationStyle:statusbar.ANIMATION_FADE});
```

| input (constant) | Description | 
| ----- | ----------- |
| ANIMATION_NONE | No animation | 
| ANIMATION_FADE | Fading in | 
| ANIMATION_SLIDE (Default)| The statusbar will slide from top | 

### style

Set the color of status bar.

```javascript
statusbar.style = statusbar.COLOR_WHITE;
```

| input (constant) | Description | 
| ----- | ----------- |
| COLOR_BLACK | The statusbar icons and text wil be black | 
| COLOR_WHITE | The statusbar icons and text wil be white | 




## Author

Adriano Paladini
