let themeSwitch = document.querySelector(".theme_switch")
themeSwitch.onclick = ()=>{
    console.log("click")
    document.querySelector(".body").classList.toggle("dark")
}