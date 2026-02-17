export class Sword{
    constructor(tilesize, player){
        this.x = tilesize * 4
        this.y = tilesize * 2
        this.inv = false
        this.image_right = document.querySelector("#sword_right")
        this.image_left = document.querySelector("#sword_left")
        this.image_up = document.querySelector("#sword_up")
        this.image_down = document.querySelector("#sword_down")
        this.dmg = 1

        this.player = player
    }

    draw(ctx){
        if (!this.inv){
        ctx.drawImage(
            this.image_right,
            this.x,
            this.y
        )} else {
            if (this.player.look === "right"){
            this.x = this.player.x +16
            this.y = this.player.y 
            ctx.drawImage(
                this.image_right,
                this.x,
                this.y
            )
            }
            if (this.player.look === "left"){
            this.x = this.player.x -16
            this.y = this.player.y 
            ctx.drawImage(
                this.image_left,
                this.x,
                this.y
            )
            }
            if (this.player.look === "up"){
            this.x = this.player.x 
            this.y = this.player.y - 16
            ctx.drawImage(
                this.image_up,
                this.x,
                this.y
            )
            }
            if (this.player.look === "down"){
            this.x = this.player.x 
            this.y = this.player.y +16
            ctx.drawImage(
                this.image_down,
                this.x,
                this.y
            )
            }
            
            
        }
    }
}