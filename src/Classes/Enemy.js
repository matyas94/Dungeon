export class Enemy{
    constructor(tilesize,id, x, y){
        this.tilesize = tilesize
        this.image = document.querySelector("#enemy")
        this.id = id
        this.x = tilesize * x
        this.y = tilesize * y
        this.active = false
        this.health = 5
        this.dead = false
    }

    draw(ctx){
        if (!this.dead){
            ctx.drawImage(
                this.image,
                this.x,
                this.y)
            ctx.textAlign = "center"
            ctx.font = "bold 20px serif"
            switch(this.health){
                case 5: ctx.fillStyle = "#00FF00"
                break;
                case 4: ctx.fillStyle = "#9ACD32"
                break;
                case 3: ctx.fillStyle = "#FFFF00"
                break;
                case 2: ctx.fillStyle = "#FFA500"
                break;
                case 1: ctx.fillStyle = "#FF0000"
                break;
            }
            
            ctx.fillText(
                this.health,
                this.x + this.tilesize *0.5,
                this.y - this.tilesize *0.1
            )
            } else {
            this.x = -100
            this.y = -100
        }
    }

    update(player, sword, map){
        if (this.active){
            if (player.x < this.x){
                const targetX = this.x - this.tilesize;
                const targetY = this.y;
                if (!map.isWall(targetX, targetY)) {
                    this.x -= this.tilesize
                }
                
            }
            if (player.x > this.x){
                const targetX = this.x + this.tilesize;
                const targetY = this.y;
                if (!map.isWall(targetX, targetY)) {
                    this.x += this.tilesize
                }
            }
            if (player.y < this.y){
                const targetX = this.x
                const targetY = this.y - this.tilesize;
                if (!map.isWall(targetX, targetY)) {
                    this.y -= this.tilesize
                }
            }
            if (player.y > this.y){
                const targetX = this.x 
                const targetY = this.y + this.tilesize
                if (!map.isWall(targetX, targetY)) {
                    this.y += this.tilesize
                }
            }

            if (sword.x - this.tilesize/2 == this.x){
                this.health -= sword.dmg
                console.log(this.health);
                
                }
            if (sword.x + this.tilesize/2 == this.x){
                this.health -= sword.dmg
                console.log(this.health);
                
                }
            if (sword.y - this.tilesize/2 == this.x){
                this.health -= sword.dmg
                console.log(this.health);
                
                }
            if (sword.y + this.tilesize/2 == this.x){
                this.health -= sword.dmg
                console.log(this.health);
                
                }

            if(this.health === 0){
                this.dead = true
            }

        }


    }

}