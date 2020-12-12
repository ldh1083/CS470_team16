var left = document.getElementById("leftFoot");
var right = document.getElementById("rightFoot");
var moving = false;

left.style.left=20%

left.addEventListener("mousedown", initialClick, false);
right.addEventListener("mousedown", initialClick, false);
current_rotation_left_foot=0
current_rotation_right_foot=0

function move(e){
if (e.type=='mousemove'){    

var newX = e.clientX -50;
  var newY = e.clientY - 100;
  image.style.left = newX + "px";
  image.style.top = newY + "px";}

  else { //rotate
    console.log(e.keyCode, image.id)
    if(e.keyCode==37 && image.id=='rightFoot'){
        current_rotation_right_foot-=10
        image.style.transform='rotate('+current_rotation_right_foot+'deg)'}

    else if(e.keyCode==39 && image.id=='rightFoot'){
            current_rotation_right_foot+=10
            image.style.transform='rotate('+current_rotation_right_foot+'deg)'}
    
    else if(e.keyCode==37 && image.id=='leftFoot'){
            current_rotation_left_foot-=10
            image.style.transform='rotate('+current_rotation_left_foot+'deg)'}
    
    else if(e.keyCode==39 && image.id=='leftFoot'){
                current_rotation_left_foot+=10
                image.style.transform='rotate('+current_rotation_left_foot+'deg)'}
    
    
    else if(e.keyCode==38 && image.id=='leftFoot'){
        image.innerHTML='<img id="leftfoot_image" src="image/1_left_half.jpg"/>'}
    else if(e.keyCode==40 && image.id=='leftFoot'){
        image.innerHTML='<img id="leftfoot_image" src="image/1_left.jpg"/>'}
    else if(e.keyCode==38 && image.id=='rightFoot'){
        image.innerHTML='<img id="leftfoot_image" src="image/1_right_half.jpg"/>'}
    else if(e.keyCode==40 && image.id=='rightFoot'){
        image.innerHTML='<img id="leftfoot_image" src="image/1_right.jpg"/>'}

      }
}


function initialClick(e) {
  window.scrollTo(0,0)
  if(moving){
    document.removeEventListener("mousemove", move);
    window.removeEventListener("keydown",move)
    console.log('end')
    moving = !moving; 
    return;
  }
  
  moving = !moving;
  image = this;
  window.addEventListener("keydown",move,false)  
  document.addEventListener("mousemove", move, false);
  
  console.log("inital")
}

// image moving code from https://stackoverflow.com/questions/33948464/move-an-image-with-javascript-using-mouse-events


function choose_sample(n){
  left.innerHTML='<img id="leftfoot_image" src="image/'+n+'_left.jpg"/>'
  right.innerHTML='<img id="rightfoot_image" src="image/'+n+'_right.jpg"/>'
}


function screenshot(){
    console.log('screenshot')    
    filename=document.getElementById('filename').value
    console.log(filename)
    let div = document.getElementById('square_outline'); 

        // Use the html2canvas 
        // function to take a screenshot 
        // and append it 
        // to the output div 
        window.scrollTo(0,0)
            html2canvas(div,{allowTaint:true}).then(function(canvas) {
                var output=document.getElementById('output')
                output.appendChild(canvas)
                var link = document.createElement("a");
                document.body.appendChild(link);
                link.download = "./image/"+filename+".png";
                console.log(link)
                link.href = canvas.toDataURL("image/png");
                link.target = '_blank';
                link.click();
            });
}