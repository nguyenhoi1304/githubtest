document.getElementById("addchat").addEventListener("click", function () {
    document.querySelector(".listchat").style.display = "flex";

});
document.getElementById("itemclose").addEventListener("click", function () {
    document.querySelector(".listchat").style.display = "none";
    
});

document.getElementById("close").addEventListener("click", function () {
    document.querySelector(".popup-content").style.display = "none";
});

var item = document.querySelectorAll('.listchat--item');

for (var i = 0; i <= item.length; i++){
    item[i].onclick = function(){
        document.querySelector(".popup-content").style.display = "flex";
            
    }
    
    
}




