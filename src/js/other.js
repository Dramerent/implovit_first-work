console.log('1')

var disMenu = 0;
 pinktext = function(el){
    el.children[0].style.color = "#F4ACBA";
    el.style.transition = "0.3s"
}
 bluetextButton = function(el){
    el.children[0].style.color = "rgba(70, 192, 193, 1)"
    el.children[0].style.transition = "0.3s"

}
 bluetext = function(el){
    el.style.color = "rgba(70, 192, 193, 1)"
    el.style.transition = "0.3s"

}
 hover_fill = function(el){
    if(document.documentElement.scrollWidth>=960){
    
   
    var max = 0
    
    for(i = 0; i < el.children[0].children.length; i++){
        max = Math.max(i)
    }
  
    console.log("максимальное:" + max)
       var maxChild = 0
        for(i = 0; i < el.children[1].children.length; i++){
                maxChild = Math.max(i)
          }

        el.children[0].children[max].style.cssText = "transition:1s ease-in-out; transform:scale(20000%);"
        el.children[0].children[max-1].style.cssText = "transition:1s ease-in-out;transform:scale(20000%); "
        if(el.className != "brends__block brends__block_grid3" && el.className != "brends__block brends__block_grid6"&&el.className!="brends__block brends__block_grid7"&&el.className!="brends__block brends__block_grid8"){  

            el.children[1].children[1].style.color = "white"
            el.children[1].children[maxChild].style.color = "white"
            if(el.className == "brends__block brends__block_grid1")
                {
                    el.children[1].children[0].style.cssText = "content:url('images/footer-implovit.svg')"
                }
        


    }
}

}
 hover_nofill = function(el){
    if(document.documentElement.scrollWidth>=960){
        var maxChild = 0
        for(i = 0; i < el.children[1].children.length; i++){
            maxChild = Math.max(i)
            console.dir(maxChild)
        }

        for(i = 0; i < el.children[0].children.length; i++){
            console.dir(i)
            max = Math.max(i)

        }
        el.children[1].children[1].style.color = "black"
        el.children[0].children[max].style.cssText = "transition: 0.3s ease-in-out; transform:scale(100%)"
        el.children[0].children[max-1].style.cssText = "transition: 0.3s ease-in-out; transform:scale(100%)"

        if(el.className == "brends__block brends__block_grid1"){
            el.children[1].children[maxChild].style.color = "rgba(70, 192, 193, 1)"
            el.children[1].children[0].style.cssText = "transition: 0.3s ease-in-out;content:url('images/brends/brends__name/импловит.svg')"
        }

        else if(el.className == "brends__block brends__block_grid2" || el.className == "brends__block brends__block_grid4"){
            el.children[1].children[maxChild].style.cssText = "transition: 0.3s ease-in-out;color: rgba(228, 0, 70, 1)"
        }

        else if(el.className == "brends__block brends__block_grid5"){
            el.children[1].children[maxChild].style.cssText = "transition: 0.3s ease-in-out;color: rgba(70, 192, 193, 1)"

        }
    }
}
fm_ierh = 0
 next = function(){
    if(fm_ierh == 0){
    document.getElementsByClassName("full-menu__body_group1")[0].style.display = "none"
    document.getElementsByClassName("full-menu__body_group2")[0].style.display = "flex"
    document.getElementsByClassName("menu-text_anactive-gray")[0].style.display = "flex"
    document.getElementsByClassName("full-menu__implovit")[0].style.display ="none"
    fm_ierh =1
    }
    else if(fm_ierh == 1){
        document.getElementsByClassName("full-menu__body_group2")[0].style.display = "none"
        document.getElementsByClassName("full-menu__body_group3")[0].style.display = "flex"
        fm_ierh = 2
        console.dir(fm_ierh)
        document.getElementsByClassName("full-menu__liked")[0].style.display = "none"
    }

}

 back = function(){
    if(fm_ierh == 2){
        document.getElementsByClassName("full-menu__body_group2")[0].style.display = "flex"
        document.getElementsByClassName("full-menu__body_group3")[0].style.display = "none"
        fm_ierh = 1
        document.getElementsByClassName("full-menu__liked")[0].style.display = "flex"

    }  
    else if(fm_ierh == 1){
    document.getElementsByClassName("full-menu__body_group1")[0].style.display = "flex"
    document.getElementsByClassName("full-menu__body_group2")[0].style.display = "none"
    document.getElementsByClassName("menu-text_anactive-gray")[0].style.display = "none"
    document.getElementsByClassName("full-menu__implovit")[0].style.display ="flex"
    fm_ierh=0
}
}
 fullMenu_enable = function(){
    
    document.getElementsByClassName("full-menu")[0].style.transition = "0.3s"

    document.getElementsByClassName("full-menu")[0].style.right = "0px"
    document.getElementsByClassName("stop-scroll")[0].style.display = "block"

}
 fullMenu_disable = function(){
    
    document.getElementsByClassName("full-menu")[0].style.transition = "0.3s"
    document.getElementsByClassName("stop-scroll")[0].style.display = "none"

    document.getElementsByClassName("full-menu")[0].style.right = "-360px"

}

 tumblerMouseEnter = function(el){
    if(el.style.color != "black")
        el.style.color ="rgba(70, 192, 193, 1)"
    
}
 whitetextButton = function(el){
 el.children[0].style.color = "white"
}
 whitetext = function(el){
    el.style.color = "white"
}
 icebluetext = function(el){
    el.style.color = "rgba(160, 220, 228, 1)"
    el.style.transition = "0.3s"
}
 blacktext = function(el){
    el.style.color = "black"
    el.style.transition = "0.3s"
}


 Citiesblacktext = function(el){
    el.children[0].style.color = "black"
    el.children[0].style.transition = "0.3s"
}
 Citiesbluetext = function(el){
    el.children[0].style.color = "rgba(70, 192, 193, 1)"
    el.children[0].style.transition = "0.3s"

}


if(document.documentElement.scrollWidth<=720 && window.location.pathname == '/one_brend.html'){
    document.querySelector(".about-Company__opis").children[1].children[0].innerHTML = 'посмотреть видео'
    
}
else if(document.documentElement.scrollWidth>=720 && window.location.pathname == '/one_brend.html'){
    document.querySelector(".about-Company__opis").children[1].children[0].innerHTML = 'посмотреть видео о производстве'

}


addAnimFirstType = function(el){
    if(el.className == "advertisements-beta__advertisement advertisements-beta__advertisement_background-blue"){
            el.children[0].style.cssText = "right:15px; transform:scale(110%); transition: 0.3s; background = rgba(145, 195, 202, 0.45)"
            el.style.cssText = "transition: 0.3s; background-color: rgba(70, 192, 193, 1)"
            el.children[0].children[0].style.cssText = "background: rgba(145, 195, 202, 0.45)"
    }
    else if(el.className == "advertisements-beta__advertisement advertisements-beta__advertisement_background-green"){
        el.children[0].style.cssText = "right:8px; transform:scale(106%); transition: 0.3s; background = rgba(145, 195, 202, 0.45)"
        el.style.cssText = "transition: 0.3s; background-color: rgba(120, 224, 197, 1)"
        el.children[0].children[0].style.cssText = "background = rgba(145, 195, 202, 0.45)"
    }
    el.children[1].children[2].style.cssText = "opacity:100; transition: 0.3s"}
disAnimFirstType = function(el){
    el.children[0].style.cssText = "right:0; transform:scale(100%); transition: 0.3s ease-in-out"
    el.children[1].children[2].style.cssText = "opacity:0; transition: 0.3s"
    if(el.className == "advertisements-beta__advertisement advertisements-beta__advertisement_background-blue"){
        el.style.cssText = "transition: 0.3s; background-color: rgba(107, 199, 211, 1);"

    }
    else if (el.className == "advertisements-beta__advertisement advertisements-beta__advertisement_background-green"){
        el.style.cssText = "transition: 0.3s; background-color: rgba(151, 224, 197, 1)"

    }

}


abcChoise = function(el){
    console.dir(el.style.textDecoration)
    if (el.style.textDecoration == ""){
        el.style.textDecoration = "underline"
        click = 1
    }
    else if(el.style.textDecoration == "underline"){
        el.style.textDecoration = ""
        click = 0
    }
}

filterChoice = function(el){
    if(el.children[1].style.display == ""){
        el.style.cssText = "background-color:rgba(160, 220, 228, 1); color:white;padding: 14px 60px 14px 14px"
        el.children[1].style.display = "flex"
        
        
    }
    
    else if(el.children[1].style.display == "flex"){
        el.style.cssText = "background-color:rgba(rgba(255, 255, 255, 1)); color:none;padding: 14px 14px 14px 14px"
        el.children[1].style.display = ""
        
    }
}