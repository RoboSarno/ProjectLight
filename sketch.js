//
//

let walls = [];
let ray;
let particle;

function setup() {
    createCanvas(3000, 2000);
    for(let i = 0; i < 10; i++) {
        let x1 = random(width);
        let x2 = random(width);
        let y1 = random(height);
        let y2 = random(height);
        walls[i] = new Boundary(x1, y1, x2, y2);//x1,y1,x2,y2
    }
    walls.push(new Boundary(0, 0, width, 0));//top
    walls.push(new Boundary(width, 0, width, height));//right
    walls.push(new Boundary(width, height, 0, height));//bot
    walls.push(new Boundary(0, height, 0, 0));//left

    particle = new Particle();
}

function draw() {
    background(0);
    for(let wall of walls) {
        wall.show();
    }
    particle.update(mouseX, mouseY);
    particle.show();
    particle.look(walls);
    // ray.show();
    // ray.lookAt(mouseX, mouseY) 
    
    // let pt = ray.cast(wall);
    // if(pt) {
    //     fill(255);

    //     ellipse(pt.x, pt.y, 8, 8);
    // }

}