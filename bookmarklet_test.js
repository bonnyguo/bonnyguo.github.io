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

         var div = $("<div>You only have 60s to read this page before it is gone!</div>");


        // $("div").animate({height: "300px"});

            // add some css properties to the div
            div.css({
              'position': 'fixed', // position absolutely
              'top': '0px',           // 100px from the top
              'left': '0px',          // 50% from the left
              'font-weight':'bold',
              'font-variant':'small-caps',
              'font-family':'Helvetica',
              'background-color': 'white',
              'width': '100vw',
              'height': '30px',
              'font-size':'50px',
              'text-align':'left',
              'color':'black',
              'padding':'10px',
              'z-index':'9999',
              'float':'left',
            });

            // Append the div to the <body> tag
            $('body').append(div);
            //$("div").animate({height: "300px"}, 60000);
          $("div").animate({height: "100vh"}, 60000);







        //end



    })();

}

})();
