function preload() {

}

function setup() {
        canvas = createCanvas(600, 500);
        video = createCapture(VIDEO);
        video.hide();

    
}

function draw() {

    image(video, 0, 0, 600, 500);
    
    fill(252, 15, 3);
    stroke(252, 15, 3);
    circle(36,60,70)

    fill(252, 94, 3);
    stroke(252, 94, 3);
    rect(15,90,40,350);

    fill(252, 15, 3);
    stroke(252, 15, 3);
    circle(36, 470, 70)

    fill(252, 94, 3);
    stroke(252, 94, 3);
    rect(15, 450, 550, 10);

    fill(252, 15, 3);
    stroke(252, 15, 3);
    circle(550, 470, 70);

    fill(252, 94, 3);
    stroke(252, 94, 3);
    rect(528, 90, 40, 350);

    fill(252, 15, 3);
    stroke(252, 15, 3);
    circle(550, 60, 70);

    fill(252, 94, 3);
    stroke(252, 94, 3);
    rect(15, 50, 550, 10);
    
}
function take_snapshot() {
    save("your-photo.png");
}
