function changeMode(theme){
    var icon=document.getElementById("icon");
    var logo=document.getElementById("logo1");

    if (theme==null){
         localStorage.setItem("theme","dark");
    }

    let localData=theme;

    if (localData=="light"){
        icon.src="Images/sun.png";
        logo.src="Images/weblogo.png";
        document.body.classList.add("light-theme");
    }
    else if (localData=="dark"){
         icon.src="Images/moon.png";
         logo.src="Images/logo.png";
         document.body.classList.remove("light-theme");
    }

    icon.onclick=function(){
        document.body.classList.toggle("light-theme");
        if (document.body.classList.contains("light-theme")){
            icon.src="Images/sun.png";
            logo.src="Images/weblogo.png";
            localStorage.setItem("theme","light");
            document.body.classList.add("light-theme");
        }
        else{
            icon.src="Images/moon.png";
            logo.src="Images/logo.png";
            localStorage.setItem("theme","dark");
            document.body.classList.remove("light-theme");
        }
    }
}

window.onload=function(){
    changeMode(localStorage.getItem("theme"));
}