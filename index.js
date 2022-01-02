function clearScreen(){
    document.getElementById("result").value="";

}
function liveScreen(value){
    document.getElementById("result").value+=value;
}
function switchTheme(){
    let darkmode=doucment.getElementById("dark-mode");
    let theme=doucment.getElementById("theme");
    if(theme.getAttribute('ref')="light.css"){
        theme.href="darkmode.css"; 
        darkmode.innerHTML="dark-mode";
    }else{
        theme.href="light.css";
        lightmode.innerHTML="light-mode";
    }
}