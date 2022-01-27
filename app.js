const btnOpen= document.querySelector(".btn-menu");
const btnClose = document.querySelector(".btn-close");
const sidebar = document.querySelector(".sidebar");


btnOpen.addEventListener("click",
  function(){
if(sidebar.classList.contains("mostrar-sidebar")){
sidebar.classList.remove("mostrar-sidebar");
}else{
    sidebar.classList.add("mostrar-sidebar")
}
  }
);

btnClose.addEventListener("click", 

function(){
sidebar.classList.remove("mostrar-sidebar");
}

);