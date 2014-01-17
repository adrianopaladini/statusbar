
// open a single window
var win = Ti.UI.createWindow({
    backgroundColor:'#AAA',
    layout:'vertical'
});
win.open();


mv = Ti.UI.createView({
   backgroundColor:'red',
   height:2,
   top:1 
});
win.add(mv);

// create a button to hide statusbar
var btn1 = Ti.UI.createButton({
    title:'Hide statusbar',
    top:50,
    height:40
});
win.add(btn1);

// create a button to show statusbar
var btn2 = Ti.UI.createButton({
    title:'Show statusbar',
    top:50,
    height:40
});
win.add(btn2);

// create a button to change style of statusbar
var btn3 = Ti.UI.createButton({
    title:'Change statusbar to Black',
    top:50,
    height:40
});
win.add(btn3);

// create a button to change style of statusbar
var btn4 = Ti.UI.createButton({
    title:'Change statusbar to White',
    top:50,
    height:40
});
win.add(btn4);




// IMPORTANT: do not forget to include this code in tiaap.xml:
//
//
//  <ios>
//      <plist>
//          <dict>
//              <key>UIViewControllerBasedStatusBarAppearance</key>
//              <false/>
//          </dict>
//      </plist>
//  </ios>
//
//



// Create module object
var statusbar = require('com.widbook.statusbar');




btn1.addEventListener('click', function(){
    statusbar.hide();
    
    /*
    You can use with arguments:
    
    statusbar.hide({animationStyle: statusbar.ANIMATION_FADE });
    
    
    animationStyle can be:  
    ANIMATION_NONE
    ANIMATION_SLIDE (Default)
    ANIMATION_FADE

    
    */
});

btn2.addEventListener('click', function(){
    statusbar.show();
    
    /*
    You can use with arguments:
    
    statusbar.show({animationStyle: statusbar.ANIMATION_FADE });
    
    
    animationStyle can be:  
    ANIMATION_NONE
    ANIMATION_SLIDE (Default)
    ANIMATION_FADE
    
    */
});

btn3.addEventListener('click', function(){
    statusbar.style = statusbar.COLOR_BLACK;
    
    /*

     Style can be:
     COLOR_BLACK
     COLOR_WHITE
     
    */
});

btn4.addEventListener('click', function(){
    statusbar.style = statusbar.COLOR_WHITE;
    
    /*

     Style can be:
     COLOR_BLACK
     COLOR_WHITE
     
    */
});

