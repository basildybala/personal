window.onload = function(){setTimeout("loadAds()", 500); 
} 

function loadAds(){
  loadScript('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',function(){
      console.log("loaded script.")}); 
}  
    
function loadScript(src, callback) {      
var script = document.createElement('script');          
var head = document.getElementsByTagName('head')[0];      
script.type = 'text/javascript';      
script.charset = 'UTF-8';      
script.src = src;      
if (script.addEventListener) {          
   script.addEventListener('load', function() { callback();}, false);      
} else if (script.attachEvent) {
   script.attachEvent('onreadystatechange', function () {  
       var target = window.event.srcElement;  
       if (target.readyState == 'loaded') { 
       callback();
       }  
   });      
}      
head.appendChild(script); 
}