$(document).ready(function(){
    $("#myBtn").click(function(){
        ShowHideBox();
    });
});

function ShowHideBox(){
    // document.getElementById("test").style.display = "none";
    $("#test").toggle();
}