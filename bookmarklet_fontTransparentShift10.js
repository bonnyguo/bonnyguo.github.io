
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
    
 

//setTimeout(black, 1); // funciton + delay time
alert('You will have 60s to read this page!');


function timer(){
    
    for(var t=0.0001;t<10000;t++){

        setTimeout(black(t),t);
    }

}



function black(ti){
    var p=document.getElementsByTagName('*'); //it can be 'h1','p', ...
    
    var opa=ti/10000;
   

        for(i=0;i<p.length;i++){
           
            p[i].style.opacity=opa;

        }
        
      /*  console.log('opacity='+opa);
        console.log('time='+t);*/
      

    //alert('Time is up!');
}

//end


    })();

}

})();