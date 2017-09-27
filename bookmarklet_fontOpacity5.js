
console.log('Font Color change bookmarklet!!!');


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
    

     alert('You will have 60s to read this page!');


     var i=1;
     function myLoop(){
        setTimeout(function(){
            var op=i*0.1;
            opac(op);
            i++;
            if (i<10){
                myLoop();
            }
            alert ('opacity='+op);
        },6000);

     }

      /*  setTimeout(opac(0.9),6000);  
        setTimeout(opac(0.8),12000);  
        setTimeout(opac(0.7),18000);  
        setTimeout(opac(0.6),24000);  
        setTimeout(opac(0.5),30000);  
     alert('30s left');
        setTimeout(opac(0.4),36000);  
        setTimeout(opac(0.3),42000);  
        setTimeout(opac(0.2),48000); 
        setTimeout(opac(0.1),54000); 
        setTimeout(opac(0),60000); 
    alert('time is up');
*/
function opac(o){

    var p=document.getElementsByTagName('p'); //it can be 'h1','p', ...
        
        for(i=0;i<p.length;i++){
           
            p[i].style.opacity=o;
        }
       // alert('opacity='+o);
}
         
              

 /*          javascript:void(document.getElementsByTagName("*").style.color = 'blue');
           console.log(document.getElementsByTagName('*').style.color);
           console.log('test');
 
 
 $(document).click(function(){    // location can be changed e.g. $('h1')

    var p=document.getElementsByTagName('*'); //it can be 'h1','p', ...
        for(i=0;i<p.length;i++){
            if(p[i].style.fontSize){
                var s=parseInt(p[i].style.fontSize.replace("px",""));
            } else {
                var s=12;}s+=5;p[i].style.fontSize=s+"px"}
 */


//end


    })();

}

})();