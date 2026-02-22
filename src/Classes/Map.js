export class Map{
    constructor(tileSize){
        this.tileSize = tileSize
        this.image = document.querySelector("#wall")
        this.closedDoor = 3
        this.op = 1
this.layout = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],//1
    [1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,4,1,1,0,0,0,0,0,0,0,0,0,1],//2
    [1,0,0,0,4,0,2,0,this.closedDoor,0,0,0,0,2,this.closedDoor,0,0,0,1,2,1,0,0,0,0,0,0,0,0,0,1],//3
    [1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,this.op,0,0,0,0,0,0,0,0,0,1],//4
    [1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1],//5
    [1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,this.closedDoor,1,1,1,1,0,0,0,0,0,0,0,0,0,1],//6
    [1,0,0,0,0,0,0,0,0,2,1,4,0,0,0,0,0,1,4,4,1,0,0,0,0,0,0,0,0,0,1],//7
    [1,this.closedDoor,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1],//8
    [1,0,0,0,0,0,1,2,1,4,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1],//9
    [1,1,0,0,0,0,this.closedDoor,0,1,0,0,1,0,0,0,2,1,0,0,0,1,1,1,1,1,this.closedDoor,1,1,1,1,1],//10
    [1,2,0,0,0,0,1,0,0,0,0,1,this.closedDoor,1,1,1,1,1,this.closedDoor,1,1,0,0,0,0,0,0,0,0,0,1],//11
    [1,this.closedDoor,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],//12
    [1,0,4,4,4,4,1,0,0,1,1,1,0,0,0,0,1,0,2,0,0,0,4,0,4,0,4,0,4,0,1],//13
    [1,0,4,4,4,4,1,0,0,0,0,this.closedDoor,0,0,0,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],//14
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] //15
];



    }

    draw(ctx){
        for(let row = 0; row < this.layout.length; row++){
            for(let col = 0; col < this.layout[row].length; col++){
                const tile = this.layout[row][col]
                const x = col * this.tileSize
                const y = row * this.tileSize
                if (tile == 0){
                    // bg
                    ctx.fillStyle = 'black'
                    ctx.fillRect(x,y,this.tileSize,this.tileSize)
                    // keret
                    ctx.stroke = "black"
                    ctx.strokeRect(x,y,this.tileSize,this.tileSize)
                }
                if (tile == 1){
                    //fal
                    ctx.drawImage(
                        this.image,
                        x,
                        y,
                        32,
                        32
                    )
                    // keret
                    ctx.stroke = "black"
                    ctx.strokeRect(x,y,this.tileSize,this.tileSize)
                }
                if (tile == 2){
                    //key
                    ctx.fillStyle = 'black'
                    ctx.fillRect(x,y,this.tileSize,this.tileSize)
                    // keret
                    ctx.stroke = "black"
                    ctx.strokeRect(x,y,this.tileSize,this.tileSize)
                }
                if (tile == 3){
                    //door
                    ctx.fillStyle = 'black'
                    ctx.fillRect(x,y,this.tileSize,this.tileSize)
                    // keret
                    ctx.stroke = "black"
                    ctx.strokeRect(x,y,this.tileSize,this.tileSize)
                }
                if (tile == 4){
                    //item
                    ctx.fillStyle = 'green'
                    ctx.fillRect(x,y,this.tileSize,this.tileSize)
                    // keret
                    ctx.stroke = "black"
                    ctx.strokeRect(x,y,this.tileSize,this.tileSize)
                }
            }
        }
    }
    isWall(x, y) {
    const col = Math.floor(x / this.tileSize);
    const row = Math.floor(y / this.tileSize);

    if (
        row < 0 ||
        row >= this.layout.length ||
        col < 0 ||
        col >= this.layout[0].length
    )
      return true; // pályán kívül

    return this.layout[row][col] === 1;
    }

}