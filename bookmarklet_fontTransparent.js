
console.log('Font Transparency change bookmarklet!!!');


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
    



setTimeout(black, 1);

function black(){
    var p=document.getElementsByTagName('*'); //it can be 'h1','p', ...
        for(i=0;i<p.length;i++){
           
                p[i].style.color='black';

            }
                
        alert('You will have 60s to read this page!');
}



    setTimeout(grey, 30000);

function grey(){
    var p=document.getElementsByTagName('*'); //it can be 'h1','p', ...
        for(i=0;i<p.length;i++){
           
                p[i].style.color='grey';

            }
                
        alert('30s left!');
}


setTimeout(white, 60000);

function white(){
    var p=document.getElementsByTagName('*'); //it can be 'h1','p', ...
        for(i=0;i<p.length;i++){
           
                p[i].style.color='white';

            }
                
        alert('Time Out!');
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