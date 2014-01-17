
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

// Create module object
var statusbar = require('com.widbook.statusbar');




btn1.addEventListener('click', function(){
    statusbar.hide();
    
    /*
    You can use with arguments:
    
    args = {
        animated:true,
        animationStyle:2
    };
    statusbar.hide(args);
    
    
    animationStyle can be:  
    0 = NONE,
    1 = FADE,
    2 = SLIDE
    
    */
});

btn2.addEventListener('click', function(){
    statusbar.show();
    
    /*
    You can use with arguments:
    
    args = {
        animated:true,
        animationStyle:2
    };
    statusbar.show(args);
    
    
    animationStyle can be:  
    0 = NONE,
    1 = FADE,
    2 = SLIDE
    
    */
});

btn3.addEventListener('click', function(){
    statusbar.style = 0;
    
    /*

     Style can be:
     0 = BLACK
     1 = WHITE
     
    */
});

btn4.addEventListener('click', function(){
    statusbar.style = 1;
    
    /*

     Style can be:
     0 = BLACK
     1 = WHITE
     
    */
});

