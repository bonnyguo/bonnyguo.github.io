
console.log('Loaded bookmarklet!!!');


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



var div = $("<div>Here is some text</div>");

// add some css properties to the div
div.css({
  'position': 'absolute', // position absolutely
  'top': '100px',           // 100px from the top
  'left': '50%',          // 50% from the left
  'border': '1px solid black', // black border
  'background-color': 'white',
  'width': '200px',
  'height': '200px'
});

// Append the div to the <body> tag
$('body').append(div);



//end


    })();

}

})();