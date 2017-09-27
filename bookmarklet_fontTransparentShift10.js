
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
    
 

setTimeout(black, t); // funciton + delay time
alert('You will have 60s to read this page!');

function black(){
    var p=document.getElementsByTagName('*'); //it can be 'h1','p', ...
    
    t=0;
    
    for(var opa=1;opa>=0;opa=opa-0.01){

        for(i=0;i<p.length;i++){
           
            p[i].style.opacity=opa;

        }
        
        t=t+100;

    }      

    alert('Time is up!');
}

//end


    })();

}

})();