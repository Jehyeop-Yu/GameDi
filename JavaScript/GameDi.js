var startClick = function(){
    document.querySelector('div.a').style.display = "none";
    document.querySelector('div.b').style.display = "block";
    setTimeout(function(){location.href="GameDi_main.html"},300);
}

var edit = function(){
    var inputList = document.querySelectorAll('input')
    for(var i=0; i<inputList.length; i++){
        document.getElementsByTagName('input')[i].style.display="block";
    }
}

var save = function(){
    var inputList = document.querySelectorAll('input')
    for(var i=0; i<inputList.length; i++){
        document.getElementsByTagName('input')[i].style.display="none";
    }
}

var Action = function(){ 
    document.querySelector('div.Game-main').style.display="none";
    document.querySelector('div.Game-Action').style.display="block";
}