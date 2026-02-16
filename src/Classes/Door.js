export class Door{
    constructor(tilesize, id, x, y){
        this.tilesize = tilesize
        this.id = id
        this.x = tilesize * x
        this.y = tilesize *y
        this.image = document.querySelector("#door")
        this.isOpen = false
    }

    draw(ctx){
        if (!this.isOpen){
            ctx.drawImage(
                this.image,
                this.x,
                this.y
            )} else {
            ctx.drawImage(

                this.image,
                this.x = -100,
                this.y = -1)
            }
    }
}