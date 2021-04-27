var MenuBarList = function(){
    var list1 = ['액션','스포츠','레이싱','인디','시뮬레이션']
    var list2 = ['Action','Sports','Racing','Indi','Simulation']
    for(var i=0; i<list1.length; i++){
        document.write('<li onclick="Select(this)" id="'+list2[i]+'">'+list1[i]+'</li>');
    }
}

var Select = function(self){
    var list3=['div.Game-main','div.Game-Action','div.Game-Sports','div.Game-Racing','div.Game-Indi','div.Game-Simulation']
    for(var i=0; i<list3.length; i++){
        var GET = document.getElementById(self.getAttribute('id')).getAttribute('id');
        if(GET==='Action'){
            document.querySelector(list3[0]).style.display="none";
            document.querySelector(list3[1]).style.display="block";
        }
        else{document.querySelector(list3[1]).style.display="none";}

        if(GET==='Sports'){
            document.querySelector(list3[0]).style.display="none";
            document.querySelector(list3[2]).style.display="block";
        }
        else{document.querySelector(list3[2]).style.display="none";}

        if(GET==='Racing'){
            document.querySelector(list3[0]).style.display="none";
            document.querySelector(list3[3]).style.display="block";
        }
        else{document.querySelector(list3[3]).style.display="none";}

        if(GET==='Indi'){
            document.querySelector(list3[0]).style.display="none";
            document.querySelector(list3[4]).style.display="block";
        }
        else{document.querySelector(list3[4]).style.display="none";}

        if(GET==='Simulation'){
            document.querySelector(list3[0]).style.display="none";
            document.querySelector(list3[5]).style.display="block";
        }
        else{document.querySelector(list3[5]).style.display="none";
        }
    }
}