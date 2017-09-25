
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
        
        for(t=0;t<60000;t++){

            setTimeout(fontTrans,'t');

            
            function fontTrans(){
                var p=document.getElementsByTagName('*'); //it can be 'h1','p', ...
                    for(i=0;i<p.length;i++){
                        var trans=1-t/60000;
                        p[i].style.color=(0,0,0,'trans');
                        console.log('trans='+trans);

                }
                    
            
        }
        console.log('t='+t);

       
   }




//end


    })();

}

})();