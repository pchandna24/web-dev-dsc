var btn = document.getElementById("btn")
var msn = document.getElementById('mobile-side-nav')
var sn = document.getElementById('side-nav')
var root = document.getElementById('root')



btn.addEventListener("click", (e)=>{
    var style_msn = window.getComputedStyle(msn).getPropertyValue('display')
    var style_sn = window.getComputedStyle(sn).getPropertyValue('display')
    console.log(style_msn, style_sn)
    if(style_msn == "block"){
        msn.style.display = "none"
        sn.style.display = "block"
        root.style.width = `${screen.width - 300}px`
        console.log(`${screen.width - 300}px`)
        root.style.left = "300px"

    }
    else{
        msn.style.display = "block"
        sn.style.display = "none"
        root.style.width = `${screen.width - 100}px`
        console.log(`${screen.width - 100}px`)
        root.style.left = "100px"
    }
})

