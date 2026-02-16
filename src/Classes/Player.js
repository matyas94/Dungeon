
export class Player{
    constructor(tileSize) {
    this.tileSize = tileSize;
    this.x = tileSize; 
    this.y = tileSize *2;
    this.image = document.querySelector("#player")
    
    this.dmg = 5

    this.look = "right"
    }

    draw(ctx){
        
        ctx.drawImage(
            this.image,
            this.x,
            this.y
        )

    }

    update(inputKeys, prevInputKeys, map, doors) {



        // Only move if key is newly pressed (was not pressed last frame)
        if (inputKeys["d"] && !prevInputKeys["d"]) {
            const targetX = this.x + this.tileSize;
            const targetY = this.y;
            const doorAtTarget = Object.values(doors).find(
                door => door.x === targetX && door.y == targetY && !door.isOpen
            )
            if (!map.isWall(targetX, targetY) && !doorAtTarget) {
                this.x = targetX;
            }
        }
        if (inputKeys["a"] && !prevInputKeys["a"]) {
            const targetX = this.x - this.tileSize;
            const targetY = this.y;
            const doorAtTarget = Object.values(doors).find(
                door => door.x === targetX && door.y == targetY && !door.isOpen
            )
            if (!map.isWall(targetX, targetY) && !doorAtTarget) {
                this.x = targetX;
            }
        }
        if (inputKeys["w"] && !prevInputKeys["w"]) {
            const targetX = this.x;
            const targetY = this.y - this.tileSize;
            const doorAtTarget = Object.values(doors).find(
                door => door.x === targetX && door.y == targetY && !door.isOpen
            )
            if (!map.isWall(targetX, targetY) && !doorAtTarget) {
                this.y = targetY;
            }
        }
        if (inputKeys["s"] && !prevInputKeys["s"]) {
            const targetX = this.x;
            const targetY = this.y + this.tileSize;
            const doorAtTarget = Object.values(doors).find(
                door => door.x === targetX && door.y == targetY && !door.isOpen
            )
            if (!map.isWall(targetX, targetY) && !doorAtTarget) {
                this.y = targetY;
            }
        }
        if (inputKeys["ArrowRight"] && !prevInputKeys["ArrowRight"]){
            this.look = "right"
        }
        if (inputKeys["ArrowLeft"] && !prevInputKeys["ArrowLeft"]){
            this.look = "left"
        }
        if (inputKeys["ArrowUp"] && !prevInputKeys["ArrowUp"]){
            this.look = "up"
        }
        if (inputKeys["ArrowDown"] && !prevInputKeys["ArrowDown"]){
            this.look = "down"
        }
    }


}