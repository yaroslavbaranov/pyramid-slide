//HEIGHT CHANGE
determineHeightAndThenDrawPyramid();

document.getElementById("height").addEventListener("input",function(event) {
    determineHeightAndThenDrawPyramid();
});
//SYMBOL CHANGE
document.getElementById("symbol").addEventListener("change", function(event) {
    determineHeightAndThenDrawPyramid();
});

function determineHeightAndThenDrawPyramid() {
   // figure out the height the user typed (replace the "5" below)
    var heightStr = document.getElementById('height').value;
    var height = parseInt(heightStr);
    document.getElementById('heightlabel').innerHTML=height;

   // draw the pyramid with the given height
    drawPyramid(height);
}

function drawPyramid(height) {
     // get symbol
     var symbol = document.getElementById("symbol").value;
    // before drawing, clear the old content
     document.getElementById("pyramid").innerHTML="";
    // for each row....
     for (var row = 0; row < height; row++) {
         // figure out number of bricks and spaces
         var numBricks = row + 2;
         var numSpaces = height - row - 1;
         // build up a string for this row
         var rowStr = "";
         for (var i = 0; i < numSpaces; i++) {
             rowStr += "&nbsp";
         }
         //use 'symbol' to determine which symbol to use
         for (var i = 0; i < numBricks; i++) {
             rowStr += symbol;
         }
       // create a <p> element with the text inside
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
       // insert the paragraph as a child of the container <div>
        document.getElementById("pyramid").appendChild(rowElem);
    }
}

function mouseOver() {
    document.getElementById("symbol").style.color = "red";

}
