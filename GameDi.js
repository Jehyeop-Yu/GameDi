var startClick = function(){
    document.querySelector('div.a').style.display = "none";
    document.querySelector('div.b').style.display = "block";
    setTimeout(function(){location.href="GameDi_main.html"},300);
}

var add = function() {
    var name = prompt('Menu Name','');
    var plusUl = document.createElement('li');
    plusUl.innerHTML = "<a href="+name+".html"+">"+name+"</a>";
    if(!name == '') {
        document.getElementById('MENU-add').appendChild(plusUl);
    }
}