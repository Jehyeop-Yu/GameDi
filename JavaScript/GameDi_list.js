var MenuBarList = function(){
    var list1 = ['액션','스포츠','레이싱','인디','시뮬레이션']
    var list2 = ['Action','Sports','Racing','Indi','Simulation']
    for(var i=0; i<list1.length; i++){
        // document.write('<li onclick="Select()" id="'+list2[i]+'">'+list[i]+'</li>');
        document.write('<li onclick="'+list2[i]+'()">'+list1[i]+'</li>');
    }
}

var Action = function(){
    // var list3=['div.Game-main','div.Game-Action','div.Game-Racing','div.Game-Indi','div.Game-Simulation']
    // var clk = document.querySelector(list3[i]).style.display="none";
    // for(var i=0; i<list3.length; i++){
    //     clk;
    // }
    document.querySelector('div.Game-main').style.display="none";
    document.querySelector('div.Game-Action').style.display="block";
    document.querySelector('div.Game-Sports').style.display="none";
    document.querySelector('div.Game-Racing').style.display="none";
    document.querySelector('div.Game-Indi').style.display="none";
    document.querySelector('div.Game-Simulation').style.display="none";
}

var Sports = function(){
    document.querySelector('div.Game-main').style.display="none";
    document.querySelector('div.Game-Action').style.display="none";
    document.querySelector('div.Game-Sports').style.display="block";
    document.querySelector('div.Game-Racing').style.display="none";
    document.querySelector('div.Game-Indi').style.display="none";
    document.querySelector('div.Game-Simulation').style.display="none";
}

var Racing = function(){
    document.querySelector('div.Game-main').style.display="none";
    document.querySelector('div.Game-Action').style.display="none";
    document.querySelector('div.Game-Sports').style.display="none";
    document.querySelector('div.Game-Racing').style.display="block";
    document.querySelector('div.Game-Indi').style.display="none";
    document.querySelector('div.Game-Simulation').style.display="none";
}

var Indi = function(){
    document.querySelector('div.Game-main').style.display="none";
    document.querySelector('div.Game-Action').style.display="none";
    document.querySelector('div.Game-Sports').style.display="none";
    document.querySelector('div.Game-Racing').style.display="none";
    document.querySelector('div.Game-Indi').style.display="block";
    document.querySelector('div.Game-Simulation').style.display="none";
}

var Simulation = function(){
    document.querySelector('div.Game-main').style.display="none";
    document.querySelector('div.Game-Action').style.display="none";
    document.querySelector('div.Game-Sports').style.display="none";
    document.querySelector('div.Game-Racing').style.display="none";
    document.querySelector('div.Game-Indi').style.display="none";
    document.querySelector('div.Game-Simulation').style.display="block";
}



// var Select = function(){
//     var list2 = ['Action','Sport','Racing','Indi','Simulation']
//     var list3 = ['Game-main','Game-Action']
//     var slt = document.getElementById("Action");
//     var cnts = document.querySelector(list3[i]);
//     for(var i=0; i<list2.length; i++){
//         cnts.style.display="block";
//         console.log(i)
//         if(slt.clicked == true){
//         }
//     }
// }
