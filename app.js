var btn = document.getElementById("btn")
var msn = document.getElementById('mobile-side-nav')
var sn = document.getElementById('side-nav')



btn.addEventListener("click", (e)=>{
    var style_msn = window.getComputedStyle(msn).getPropertyValue('display')
    var style_sn = window.getComputedStyle(sn).getPropertyValue('display')
    console.log(style_msn, style_sn)
    if(style_msn == "block"){
        msn.style.display = "none"
        sn.style.display = "block"

    }
    else{
        msn.style.display = "block"
        sn.style.display = "none"
    }
})
