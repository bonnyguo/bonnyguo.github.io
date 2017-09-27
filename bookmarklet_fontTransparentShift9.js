
console.log('Font disappear bookmarklet!!!');


javascript:(function(){


var v ="2.2.4"; // version of jquery we want to use

if (window.jQuery== undefined || window.jQuery.fn.jquery < v){

    var done = false;
    var script = document.createElement("script");
    script.src="http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js"; // load version of jQuery we specify
    script.onload = script.onreadystatechange = function(){

        if (!done && (!this.readyState || this.readyState=="loaded" || this.readyState =="complete")){

        done = true;
        initMyBookmarklet(); //If jquery is loaded now run my script

        }
    };
document.getElementsByTagName("head")[0].appendChild(script);


}else{
    initMyBookmarklet();
}

function initMyBookmarklet(){
    (window.myBookmarklet = function (){

        //YOUR CODE GOES HERE!
    
 

        alert('You will have 60s to read this page before it disappears!');




// Polyfill getComputedStyle for old IE
if (!window.getComputedStyle) {
  window.getComputedStyle = function(element) {
    return element.currentStyle;
  }
}

// Your _opacity function
function _opacity(ele, opacity, addOpac, delay) {
  var direction;
  ele = document.getElementById(ele);
  
  // Determine direction
  direction = +getComputedStyle(ele).opacity < opacity ? 1 : -1;
  var timer = setInterval(function() {
    // Get the *computed* opacity
    var current = +getComputedStyle(ele).opacity;
    if (direction > 0) {
      if (current < opacity) {
        increase(current);
      } else {
        stopInc();
      }
    }
    else {
      if (current > opacity) {
        decrease(current);
      } else {
        stopInc();
      }
    }

  }, delay),

  increase = function(current) {
    // Increase, but don't go past target
    ele.style.opacity = Math.min(current + addOpac, opacity);
  },

  decrease = function(current) {
        
    // Decrease, but don't go past target
    ele.style.opacity = Math.max(current - addOpac, opacity);

  },
  stopInc = function() {
    clearInterval(timer);
  };
};

// Run
_opacity("*", 0.3, 0.01, 5000);
/*
  $( "*" ).animate({
    opacity: 0.25,
    height: 4000px,
    width: 3000px,
    position: relative,

  }, 5000, function() {
    // Animation complete.
  });

        for(t=0;t<60000;t=t+10000){

            setTimeout(fontTrans,'t');

            var trans=t/60000;
            
            function fontTrans(){
                var p=document.getElementsByTagName('*'); //it can be 'h1','p', ...
                    for(i=0;i<p.length;i++){
                        p[i].style.color=(0,0,0,trans);
                    }
                    
            
             }
     
        alert('transparency is '+trans +'; time is ' +t/1000 +'s');
       
   }

*/










//end


    })();

}

})();