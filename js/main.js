let landing=document.querySelector(".landing")

let  array=["istockphoto-1055338730-170667a.jpg","istockphoto-1311253708-170667a.jpg","d5a8d865c9fc784aba1c506d4850a7bd.jpg","138852-web_development-web_design-animation-illustration-world_wide_web-1920x1080.jpg"]



let rand=true
let count
function randombackg(){
if(rand===true){
     count =setInterval(function(){
        let imag= array[Math.floor(Math.random()* array.length)]
        landing.style.backgroundImage= 'url("image/' + imag + '")'
        
      
    },2000)
}
else{
    clearInterval(count)
}
}
randombackg()



let gear=document.getElementById("gear")
let close=document.getElementById("close")
let setting=document.querySelector(".setting")

gear.onclick=function(){
    setting.style.left="0"
    gear.style.visibility="hidden"
    close.style.visibility="visible"
}
close.onclick=function(){
    setting.style.left="-250px"
    gear.style.visibility="visible"
    close.style.visibility="hidden"
}

let color=document.querySelectorAll(".color li")
let creative=document.querySelector(".creative")
let headcolor=document.querySelector(".head-color")
let nav=document.querySelectorAll(".nav li a")
let logo=document.querySelector(".logo")
let headskill=document.querySelector(".head-skill")
let headtime=document.querySelector(".headtime")
let name=document.querySelectorAll(".name")
let about=document.getElementById("about")
let gallery=document.getElementById("gallery")
let testone=document.getElementById("testone")
let testtwo=document.getElementById("testtwo")

console.log(nav)
if(window.localStorage.color != null){
    document.documentElement.style.setProperty("--main-color",window.localStorage.color)
    creative.style.color=window.localStorage.color
        headcolor.style.color=window.localStorage.color
        // logo.style.color=window.localStorage.color
        about.style.color=window.localStorage.color
        headskill.style.color=window.localStorage.color
        gallery.style.color=window.localStorage.color
        headtime.style.color=window.localStorage.color
        testone.style.color=window.localStorage.color
        testtwo.style.color=window.localStorage.color
        name.forEach(function(ele){
            ele.style.color=window.localStorage.color
        })
        // nav.forEach(function(l){
        //     l.style.color=window.localStorage.color
        // })
        color.forEach(function(ele){
            ele.classList.remove("active")
            if(ele.dataset.color===window.localStorage.color){
                ele.classList.add("active")
            }
        })
}

color.forEach(function(ele){
    ele.addEventListener("click",function(e){
        color.forEach(function(ele){
            ele.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
        //console.log(e.currentTarget.dataset.color)
        window.localStorage.setItem("color",e.currentTarget.dataset.color)
        document.documentElement.style.setProperty("--main-color",e.currentTarget.dataset.color)
        creative.style.color=e.currentTarget.dataset.color
        headcolor.style.color=e.currentTarget.dataset.color
        // logo.style.color=e.currentTarget.dataset.color
        about.style.color=e.currentTarget.dataset.color
        headskill.style.color=e.currentTarget.dataset.color
        gallery.style.color=e.currentTarget.dataset.color
        headtime.style.color=e.currentTarget.dataset.color
        testone.style.color=e.currentTarget.dataset.color
        testtwo.style.color=e.currentTarget.dataset.color
        name.forEach(function(ele){
            ele.style.color=e.currentTarget.dataset.color
        })

        // nav.forEach(function(l){
        //     l.style.color=e.currentTarget.dataset.color
        // })

    })
})

let randomback =document.querySelectorAll(".random-back span")
let yes=document.querySelector(".yes")
let no=document.querySelector(".no")

randomback.forEach(function(ele){
    ele.addEventListener("click",function(e){
        randomback.forEach(function(ele){
            ele.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
    })
})
if (window.localStorage.image != null){
    if(window.localStorage.image==="true"){
        rand=true

    }
    else{
        rand=false
    }
}

no.onclick=function(){
    rand=false
    clearInterval(count)
    console.log(rand)
    window.localStorage.setItem("image",false)
    
    console.log(window.localStorage.image)
}

yes.onclick=function(){
    rand=true
    console.log(rand)
    randombackg()
    window.localStorage.setItem("image",true)

    
}
let aboutimg=document.getElementById("aboutimg")
let aboutt=document.querySelector(".about")

//aboutimg.style.animation=" move 3s alternate infinite"
window.onscroll=function(){
    if(window.scrollY >= aboutt.offsetTop ){
        aboutimg.style.animation=" move 3s alternate infinite"
    }
    
    
}

let wid=document.querySelector(".wid")
console.log(wid)
let widd=document.querySelector(".widd")
let widdd=document.querySelector(".widdd")
let skills=document.querySelector(".skills")
let seventy=document.querySelector(".seventy")
let eighty=document.querySelector(".eighty")
let sixty=document.querySelector(".sixty")

window.onscroll=function(){
    if (window.scrollY >= skills.offsetTop - 400 ){
        wid.style.width="200px"
        widd.style.width="150px"
        widdd.style.width="90px"
        seventy.innerHTML="70%"
        eighty.innerHTML="80%"
        sixty.innerHTML="60%"
    }
    else{
        wid.style.width="0"
        widd.style.width="0"
        widdd.style.width="0"
        seventy.innerHTML="0%"
        eighty.innerHTML="0%"
        sixty.innerHTML="0%"
    }
}

let image=document.querySelectorAll(".gallery-cont img")
//console.log(image)

image.forEach(function(ele){
    ele.addEventListener("click",function(e){
        //create overlay

        let popover=document.createElement("div")
        popover.className="popov"
        document.body.appendChild(popover)

        // create popup

        let pop=document.createElement("div")
        pop.className="popbox"
         
        //create imag in pop

        let img=document.createElement("img")
        img.className="imgg"
     

        img.src= ele.src
        //console.log(img.src)
        pop.appendChild(img)

        document.body.appendChild(pop)

        let title =document.createElement("h3")
        title.className="titlepop"
        let titletxt=document.createTextNode(ele.alt)
        title.appendChild(titletxt)
        document.body.appendChild(title)

        //create close

        let close=document.createElement("button")
        close.className="closee"
        let closetxt=document.createTextNode("X")
        close.appendChild(closetxt)

        document.body.appendChild(close)

        close.onclick=function(){
            pop.style.display="none"
            popover.style.display="none"
            title.style.display="none"
            close.style.display="none"

        }
        

    })
})

// let left=document.querySelector(".left")
// let time=document.querySelector(".timeline")
// let start=false
// window.onscroll=function(){
//     if(window.scrollY >= time.offsetTop - 400){
//         if(!start)
//         {
//             setTimeout(function(){
//             left.style.visibility="visible"
//         })}
//         start=true
        

//     }
// }

let circle=document.querySelectorAll(".bullets .circ")
console.log(circle)
if (window.localStorage.bull !=null){
    document.querySelector(window.localStorage.bull).scrollIntoView({
        behavior:'smooth'
    })
}

circle.forEach(function(ele){
   ele.addEventListener("click",function(e){
    window.localStorage.setItem("bull",e.currentTarget.dataset.click)
    document.querySelector(e.currentTarget.dataset.click).scrollIntoView({
        behavior:'smooth'
    })
   
   })
})

let paren=document.querySelector(".paren")
let bullets=document.querySelector(".bullets")
let exit=document.querySelector(".exit")

paren.onclick=function(){
bullets.style.right="0"
 paren.style.display="none"
 exit.style.display="block"

}
exit.onclick=function(){
bullets.style.right="-400px"
 paren.style.display="block"
 exit.style.display="none"

}

let reset=document.querySelector(".reset")

reset.onclick=function(){
    window.localStorage.removeItem("bull")
    window.location.reload()
}


// let sp=document.querySelector(".sp")
// let s=document.querySelector(".s")
// let spp=document.querySelector(".spp")
// let sppp=document.querySelector(".sppp")
// let works=document.querySelector(".works")

// let start=false
// window.onscroll=function(){
// if(window.scrollY >= works.offsetTop -400){
//     if(!start){
//         stat (sp)
//         stat (s)
//         stat (spp)
//         stat (sppp)


//     }
//     start=true
    
// }

// }
// function stat (el){
//     let cout=setInterval(function(){
//         el.innerHTML=+el.innerHTML+1
//         if(el.innerHTML==="30"){
//             clearInterval(cout)
//         }

//     },100)
// }
let menu=document.querySelector(".small-menu")
let menuicon=document.querySelector(".menu")
let menuclose=document.querySelector(".menu-close")

menuicon.addEventListener("click",function(){
    menu.style.display="block"
    menuclose.style.display="block"

})

menuclose.onclick=function(){
    menu.style.display="none"
    menuclose.style.display="none"

}



    