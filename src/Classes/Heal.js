export class Heal{
    constructor(tileSize, x, y, healing, superheal){
        this.image1 = document.querySelector("#heal")
        this.image2 = document.querySelector("#superheal")
        this.x = x * tileSize
        this.y = y * tileSize
        this.healing = healing
        this.pickedUp = false
        this.superheal = superheal
    }
    draw(ctx){
        if (!this.pickedUp){
            if (!this.superheal){
                ctx.drawImage(
                    this.image1,
                    this.x,
                    this.y
                )
            } else{
                ctx.drawImage(
                    this.image2,
                    this.x,
                    this.y
                )
            }
        } else {
            this.x = -100
            this.y = -100
        }
    }

    update(player){
        if (player.x === this.x && player.y === this.y && !this.pickedUp){
            if (!this.superheal){
                if (player.health <= 50){
                    player.health += this.healing
                    this.pickedUp = true
                } else {
                    player.health = 100
                    this.pickedUp = true
                }
            } else {
                player.health += this.healing
                this.pickedUp = true
            }
        }
    }

}