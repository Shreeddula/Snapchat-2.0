function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    video.size(400,400);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,400,400);
    image(dog_ears,noseX-50,noseY-120,100,150)
}

function preload(){
    dog_ears=loadImage("https://i.postimg.cc/s2G0k3zP/dog-filter-removebg-preview-1.png")
}

function take_snapshot(){
    save("my_picture.jpg");
}

function modelLoaded(){
    console.log("Pose Net Initialized");
}
noseX=0;
noseY=0;

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}
