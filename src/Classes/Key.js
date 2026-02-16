export class Key{
    constructor(tilesize,id, x, y){

        this.id = id
        this.x = tilesize * x
        this.y = tilesize * y
        this.inv = false
        this.image = document.querySelector("#key")
    }

    draw(ctx){
        if (!this.inv){
        ctx.drawImage(
            this.image,
            this.x,
            this.y
        )} else {
            this.x = 0
            this.y = 0
        }
    }
}