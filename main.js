difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(950 ,500);
    canvas.position(560 ,150);
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose', gotPoses); 
}
function modelLoaded(){
    console.log('PoseNet model is being Initialized')
}
function draw(){
    background('#F7D8BA');
    textSize(difference);
    text('WhiteHat.jr', 50, 400);
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
      rightWristX = results[0].pose.rightWrist.x;
      difference = floor(leftWristX - rightWristX);
    }    
}

function textSize(){
    fill('#FFFF00');
      
}
