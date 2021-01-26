menu_List_Array = ["Cheese Pizza",
                   "Peperoni Pizza",
                   "Veggie Pizza",
                   "Specialty Pizza"];

function get_Menu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_List_Array.sort();
    for(var i=0;i<menu_List_Array.length;i++){
        htmldata=htmldata+'<li>' + menu_List_Array[i] + '<li>'
    }
    htmldata=htmldata+"</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_Item(){
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_List_Array.push(item);
    menu_List_Array.sort();
    htmldata="<section class='cards'>"
    for(var i=0;i<menu_List_Array.length;i++){
        htmldata=htmldata+'<div class="card">' + '<img src="images/pizzaImg.png"/>' + menu_List_Array[i] + '</div>'
    }
    htmldata=htmldata+"</section>"
    document.getElementById("display_addedmenu").innerHTML = htmldata;
}