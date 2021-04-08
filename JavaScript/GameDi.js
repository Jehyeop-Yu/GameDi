var startClick = function(){
    document.querySelector('div.a').style.display = "none";
    document.querySelector('div.b').style.display = "block";
    setTimeout(function(){location.href="GameDi_main.html"},300);
}

var edit = function(){
    document.getElementsByTagName('input')[0].style.display="block";
    document.getElementsByTagName('input')[1].style.display="block";
    document.getElementsByTagName('input')[2].style.display="block";
    document.getElementsByTagName('input')[3].style.display="block";
    document.getElementsByTagName('input')[4].style.display="block";
    document.getElementsByTagName('input')[5].style.display="block";
}

var save = function(){
    document.getElementsByTagName('input')[0].style.display="none";
    document.getElementsByTagName('input')[1].style.display="none";
    document.getElementsByTagName('input')[2].style.display="none";
    document.getElementsByTagName('input')[3].style.display="none";
    document.getElementsByTagName('input')[4].style.display="none";
    document.getElementsByTagName('input')[5].style.display="none";
}










// 수정01
// var add = function() {
//     var name = prompt('Menu Name','');
//     var plusUl = document.createElement('li');
//     plusUl.innerHTML = "<a href="+name+".html"+">"+name+"</a>";
//     if(!name == '') {
//         document.getElementById('MENU-add').appendChild(plusUl);
//     }
// }