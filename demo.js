var header=document.getElementById("main-header");
header.style.borderBottom="solid 4px black";
//var items=document.getElementById("main");
//items[0].style.color="green";
var list=document.getElementsByClassName("list-group-item");
list[2].style.backgroundColor="green";
for(var i=0;i<list.length;i++){
    list[i].style.fontWeight="bold";
}