

var modal = document.getElementById('myModal');

var img = document.getElementById('button');
var modalImg = document.getElementById('Img01');
var captionText = document.getElementById('caption');

function changeImage(img) {
    document.getElementById("img").src = img.src.replace("img01", "openPic1");
}



img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;

}

var span = document.getElementByClassName("close")[0];
span.onlick = function() {
    modal.style.display = "none";
}

/* button2 */



var modal2 = document.getElementById('myModal2');

var img2 = document.getElementById('button2');
var modalImg2 = document.getElementById('Img02');
var captionText2 = document.getElementById('caption2');

function changeImage(img2) {
    document.getElementById("img2").src = img2.src.replace("img02", "openPic2");
}



img2.onclick = function() {
    modal2.style.display = "block";
    modalImg2.src = this.src;
    captionText2.innerHTML = this.alt;
}

var span2 = document.getElementByClassName("close2")[0];
span.onlick = function() {
    modal2.style.display = "none";
}


/*

REPLACE PLUS IMAGE ON HOVER TO X IMAGE ????

function changeImage(img) {
    document.getElementById("img").src = img.src.replace("img01", "openPic1");
}


















/*
var image_tracker ='f';
function change() {
    var image = document.getElementById("social");
    if(image_tracker=='f') {
        image.src ='fold3featuresplusclose2.gif';
;
        image_tracker = 't';
    }else{
        image.src = 'fold3featuresplusclose1.gif';
        image_tracker = 'f';
    }
}

*/

/*

$(function () {
    "use strict";

    $(".button img").click(function () {
        var $src = $(this).attr("src");
        $(".show").fadeIn();
        $(".img-show img").attr("src", $src);
    });

        $("span, .overlay").click(function () {
            $(".show").fadeOut();
        });
});




#example2 img {
    border: none;
    padding: 10px;
    border-radius: 50px;
    background-color: darkorange;
}

#example2 img:hover {
    border-top: 10px solid orange;
    border-right: 10px solid black;
    border-bottom: 10px solid blue;
    border-left: 10px solid red;
    padding: 10px;
    border-radius: 50px;
    background-color: darkorange;
    margin: -10px;
}

*/