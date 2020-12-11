var left = document.getElementById("leftFoot");
var right = document.getElementById("rightFoot");
var moving = false;

left.addEventListener("mousedown", initialClick, false);
right.addEventListener("mousedown", initialClick, false);


function move(e){

  var newX = e.clientX - 10;
  var newY = e.clientY - 10;

  image.style.left = newX + "px";
  image.style.top = newY + "px";

  
}

function initialClick(e) {

  if(moving){
    document.removeEventListener("mousemove", move);
    moving = !moving;
    return;
  }
  
  moving = !moving;
  image = this;

  document.addEventListener("mousemove", move, false);
console.log("inital")
}

// code from https://stackoverflow.com/questions/33948464/move-an-image-with-javascript-using-mouse-events

function screenshot(){
    console.log('screenshot')    
    let div = 
            document.getElementById('square_outline'); 

        // Use the html2canvas 
        // function to take a screenshot 
        // and append it 
        // to the output div 
   
        // html2canvas(div,{allowTaint : true}).then( 
        //     function (canvas) { 
        //         canvas.crossOrigin=
        //         var link=document.getElementById('output')
        //         link.appendChild(canvas);
        //         link.download = "html_image.png";
        //         link.href = canvas.toDataURL("image/png");
        //         // link.target = '_blank';
        //         // link.click();

        //     }) 
            html2canvas(div,{allowTaint:true}).then(function(canvas) {
                var link = document.createElement("a");
                document.body.appendChild(link);
                link.download = "html_image.png";
                console.log(link)
                link.href = canvas.toDataURL("image/png");
                link.target = '_blank';
                link.click();
            });
}