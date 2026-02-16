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
            this.y
        )} else {
            this.x = -100
            this.y = -100
        }
    }

    update(player, sword, map){
        if (this.active){
            if (player.x < this.x){
                this.x -= this.tilesize
            }
            if (player.x > this.x){
                const targetX = this.x + this.tilesize;
                const targetY = this.y;
                
                this.x += this.tilesize
            }
            if (player.y < this.y){
                this.y -= this.tilesize
            }
            if (player.y > this.y){
                this.y += this.tilesize
            }

            if (sword.x - this.tilesize/2 == this.x){
                this.health -= 1
                console.log(this.health);
                
                }
            if (sword.x + this.tilesize/2 == this.x){
                this.health -= 1
                console.log(this.health);
                
                }
            if (sword.y - this.tilesize/2 == this.x){
                this.health -= 1
                console.log(this.health);
                
                }
            if (sword.y + this.tilesize/2 == this.x){
                this.health -= 1
                console.log(this.health);
                
                }

            if(this.health === 0){
                this.dead = true
            }

        }


    }

}