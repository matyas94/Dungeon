export class Boss{
    constructor(tilesize, x, y){
        this.tilesize = tilesize
        this.image = document.querySelector("#boss")
        this.x = tilesize * x
        this.y = tilesize * y
        this.active = false
        this.health = 5000
        this.dead = false
        this.dmg = 10
        this.width = tilesize * 2
        this.height = this.width
        this.x1 = this.x
        this.x2 = this.x1 + tilesize
        this.y1 = this.y
        this.y2 = this.y1 + tilesize
    }
    draw(ctx){
        if (!this.dead){
            ctx.drawImage(
                this.image,
                this.x,
                this.y,
                this.width, 
                this.height
            )
            ctx.textAlign = "center"
            ctx.font = "bold 20px serif"

            if(this.health > 400) {ctx.fillStyle = "#00FF00"}
            if(this.health <= 400 && this.health > 300) {ctx.fillStyle = "#9ACD32"}
            if(this.health <= 300 && this.health > 200) {ctx.fillStyle = "#FFFF00"}
            if(this.health <= 200 && this.health > 100) {ctx.fillStyle = "#FFA500"}
            if(this.health <= 100 && this.health > 0) {ctx.fillStyle = "#FF0000"}
            ctx.fillText(
                this.health,
                this.x + this.tilesize,
                this.y - this.tilesize *0.2
            )
        } else {
            this.x = -100
            this.y = -100
        }
    }

    update(player, sword){
        if (!this.active){

            // if (sword.x - this.tilesize/2 == this.x && sword.y == this.y){
            //     this.health -= sword.dmg
            if (sword.x === this.x1 - this.tilesize/2 ||)

            //     }
            // if (sword.x + this.tilesize/2 == this.x && sword.y == this.y){
            //     this.health -= sword.dmg
                
            //     }
            // if (sword.y - this.tilesize/2 == this.y && sword.x == this.x){
            //     this.health -= sword.dmg
                
            //     }
            // if (sword.y + this.tilesize/2 == this.y && sword.x == this.x){
            //     this.health -= sword.dmg
                
            //     }
            if(this.health <= 0){
            this.dead = true
            }
        }
        
    }

}