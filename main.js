status = "";
name_object = "";

function setup() {
    canvas = createCanvas(480,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(480,380);
    video.hide();
}

function start() {
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "status: detecting objects";
    name_object = document.getElementById("input").value;
}

function modelLoaded() {
    console.log("the model has fortunetly and finally successfully loaded very nicely");
    status = true;
}

function draw() {
    image(video,0,0,480,380);
}