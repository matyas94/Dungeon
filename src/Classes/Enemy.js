export class Enemy{
    constructor(tilesize,id, x, y){
        this.tilesize = tilesize
        this.image = document.querySelector("#enemy")
        this.id = id
        this.x = tilesize * x
        this.y = tilesize * y
        this.active = false
        this.health = 500
        this.dead = false
        this.dmg = 10
    }

    draw(ctx){
        if (!this.dead){
            ctx.drawImage(
                this.image,
                this.x,
                this.y)
            ctx.textAlign = "center"
            ctx.font = "bold 20px serif"
            
            if(this.health <= 500 && this.health > 400) {ctx.fillStyle = "#00FF00"}
            if(this.health <= 400 && this.health > 300) {ctx.fillStyle = "#9ACD32"}
            if(this.health <= 300 && this.health > 200) {ctx.fillStyle = "#FFFF00"}
            if(this.health <= 200 && this.health > 100) {ctx.fillStyle = "#FFA500"}
            if(this.health <= 100 && this.health > 0) {ctx.fillStyle = "#FF0000"}

            
            
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

            if (sword.x - this.tilesize/2 == this.x && sword.y == this.y){
                this.health -= sword.dmg
                
                }
            if (sword.x + this.tilesize/2 == this.x && sword.y == this.y){
                this.health -= sword.dmg
                
                }
            if (sword.y - this.tilesize/2 == this.y && sword.x == this.x){
                this.health -= sword.dmg
                
                }
            if (sword.y + this.tilesize/2 == this.y && sword.x == this.x){
                this.health -= sword.dmg
                
                }

            if(this.health <= 0){
                this.dead = true
            }

        }


    }

}