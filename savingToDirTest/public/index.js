$(document).ready(function(){
    var canvas = document.getElementById("overlay");
    canvas.toBlob(function(blob) {
        saveAs(blob, "pretty image.png");
    });
})