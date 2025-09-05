

let title = document.querySelector(".title");


title.style.color = "#333";
title.style.fontSize = "45px";
title.style.textAlign = "center";


let message = document.querySelector("#message");
message.innerHTML = "Selamat Datang di Latihan DOM"
message.style.color = "#444";
message.style.textAlign = "center";
message.style.fontSize = "20px";

let input = document.querySelector("#input");

input.style.padding = "10px";
input.style.width = "300px";

let addButton = document.querySelector("#button");
addButton.style.padding = "12px 20px";
addButton.style.backgroundColor = "skyblue";
addButton.style.border = "none";
addButton.style.borderRadius = "5px";

let list = document.querySelector("#list");
list.style.width = "300px";
list.style.marginTop = "20px";

function saveList() {
  localStorage.setItem("myList", list.innerHTML);
}

function loadList() {
  list.innerHTML = localStorage.getItem("myList") || "";
}

document.addEventListener("DOMContentLoaded", loadList);

addButton.addEventListener("click", function(){
    let listItem = document.createElement("li");
    let iconTrash = document.createElement("i");
    let time = new Date();

    time = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
    let listTime = document.createElement("span");
    listTime.style.fontSize = "16px";
    listTime.textContent = " (" + time + ")";

    // Tambahkan teks dari input
    let text = document.createElement("span");
    text.textContent = input.value;

    //tambahkan ke list item
    listItem.appendChild(text);
    listItem.appendChild(listTime);
    listItem.appendChild(iconTrash);


 

    
    //styling
    iconTrash.className = "fa fa-trash";
    iconTrash.id = "icon-trash";

    iconTrash.onclick = function() {
        list.removeChild(listItem);
        saveList();
    }

    iconTrash.style.marginLeft = "20px";
    iconTrash.style.color = "red";

    listItem.style.width = "100%";
    listItem.style.display = "flex";
    listItem.style.justifyContent = "space-between";

    list.appendChild(listItem);
    input.value = "";

    saveList();
})

//simpan data ke local storage json


//ambil data dari local storage json


