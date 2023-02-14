document.addEventListener("scroll",function(e){
if(document.body.scrollTop>50){
document.getElementById('navigate').style.cssText=' background-color: black !important;'
document.getElementById('logo').setAttribute('src','./images/logo-light.png')
}
else{
  document.getElementById('navigate').style.cssText=' background-color: transparent !important;'
  document.getElementById('logo').setAttribute('src','./images/logo-dark.png')

}




})


