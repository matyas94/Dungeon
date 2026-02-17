import { Key } from "./Key"
import { Map } from "./Map"
import { Player } from "./Player"
import { Sword } from "./Sword"
import { Door } from "./Door"
import { Enemy } from "./Enemy"
import { Heal } from "./Heal"

export class Game{
    constructor(canvasId){
        this.canvas = document.getElementById(canvasId)
        this.ctx = this.canvas.getContext('2d')
        this.tileSize = 32 //csempeméret

        this.map = new Map(this.tileSize)
        this.player = new Player(this.tileSize)
        this.sword = new Sword(this.tileSize, this.player)

        this.heal1 = new Heal(this.tileSize, 18, 1, 5, false)
        this.heal2 = new Heal(this.tileSize, 18, 6, 5, false)
        this.heal3 = new Heal(this.tileSize, 9, 8, 5, false)
        this.heal4 = new Heal(this.tileSize, 28, 12, 5, true)

        this.keys = {
            key1 : new Key(this.tileSize, 1, 6, 2),
            key2 : new Key(this.tileSize, 2, 13, 2),
            key3 : new Key(this.tileSize, 3, 19, 2),
            key4 : new Key(this.tileSize, 4, 9, 6),
            key5 : new Key(this.tileSize, 5, 1, 10),
            key6 : new Key(this.tileSize, 6, 7, 8),
            key7 : new Key(this.tileSize, 7, 15, 13),
            key8 : new Key(this.tileSize, 8, 15, 9),
            key9 : new Key(this.tileSize, 9, 18, 12)

        }

        this.doors = {
            door1 : new Door(this.tileSize, 1, 8, 2),
            door2 : new Door(this.tileSize, 2, 14, 2),
            door3 : new Door(this.tileSize, 3, 16, 5),
            door4 : new Door(this.tileSize, 4, 1, 7),
            door5 : new Door(this.tileSize, 5, 6, 9),
            door6 : new Door(this.tileSize, 6, 11, 13),
            door7 : new Door(this.tileSize, 7, 12, 10),
            door8 : new Door(this.tileSize, 8, 18, 10),
            door9 : new Door(this.tileSize, 9, 25, 9),
            door10 : new Door(this.tileSize, 10, 1, 11)

        }

        this.enemies = {
            enemy1 : new Enemy(this.tileSize, 1, 11, 2),
            enemy2 : new Enemy(this.tileSize, 2, 16, 4),
            enemy3 : new Enemy(this.tileSize, 2, 19, 3),
            enemy4 : new Enemy(this.tileSize, 3, 11, 4),
            enemy5 : new Enemy(this.tileSize, 3, 10, 4),
            enemy6 : new Enemy(this.tileSize, 3, 1, 5),
            enemy7 : new Enemy(this.tileSize, 4, 3, 9),
            enemy8 : new Enemy(this.tileSize, 4, 4, 9),
            enemy9 : new Enemy(this.tileSize, 5, 9, 9),
            enemy10 : new Enemy(this.tileSize, 5, 10, 9),
            enemy11 : new Enemy(this.tileSize, 5, 10, 8),
            enemy12 : new Enemy(this.tileSize, 6, 13, 12),
            enemy13 : new Enemy(this.tileSize, 7, 18, 8),
            enemy14 : new Enemy(this.tileSize, 7, 19, 8),
            enemy15 : new Enemy(this.tileSize, 7, 18, 7),
            enemy16 : new Enemy(this.tileSize, 7, 19, 7)

        }

        this.openDoors = {}

        this.inputKeys = {}
        this.prevInputKeys = {}
        this.setupInputs()

        this.inventory = []
    }

    draw(){

        this.map.draw(this.ctx)

        this.sword.draw(this.ctx)

        this.keys.key1.draw(this.ctx)
        this.keys.key2.draw(this.ctx)
        this.keys.key3.draw(this.ctx)
        this.keys.key4.draw(this.ctx)
        this.keys.key5.draw(this.ctx)
        this.keys.key6.draw(this.ctx)
        this.keys.key7.draw(this.ctx)
        this.keys.key8.draw(this.ctx)
        this.keys.key9.draw(this.ctx)

        this.doors.door1.draw(this.ctx)
        this.doors.door2.draw(this.ctx)
        this.doors.door3.draw(this.ctx)
        this.doors.door4.draw(this.ctx)
        this.doors.door5.draw(this.ctx)
        this.doors.door6.draw(this.ctx)
        this.doors.door7.draw(this.ctx)
        this.doors.door8.draw(this.ctx)
        this.doors.door9.draw(this.ctx)
        this.doors.door10.draw(this.ctx)

        this.enemies.enemy1.draw(this.ctx)
        this.enemies.enemy2.draw(this.ctx)
        this.enemies.enemy3.draw(this.ctx)
        this.enemies.enemy4.draw(this.ctx)
        this.enemies.enemy5.draw(this.ctx)
        this.enemies.enemy6.draw(this.ctx)
        this.enemies.enemy7.draw(this.ctx)
        this.enemies.enemy8.draw(this.ctx)
        this.enemies.enemy9.draw(this.ctx)
        this.enemies.enemy10.draw(this.ctx)
        this.enemies.enemy11.draw(this.ctx)
        this.enemies.enemy12.draw(this.ctx)
        this.enemies.enemy13.draw(this.ctx)
        this.enemies.enemy14.draw(this.ctx)
        this.enemies.enemy15.draw(this.ctx)
        this.enemies.enemy16.draw(this.ctx)

        this.heal1.draw(this.ctx)
        this.heal2.draw(this.ctx)
        this.heal3.draw(this.ctx)
        this.heal4.draw(this.ctx)



        this.player.draw(this.ctx)
        this.sword.draw(this.ctx)
        
    }

    update(){


        this.heal1.update(this.player)
        this.heal2.update(this.player)
        this.heal3.update(this.player)
        this.heal4.update(this.player)



        if (this.player.x === this.sword.x && this.player.y === this.sword.y){
            this.inventory.push(this.sword)
            console.log(this.inventory);
            this.sword.inv = true
        }

        Object.values(this.keys).forEach(key => {
            if (this.player.x === key.x && this.player.y === key.y && !key.inv) {
                this.inventory.push(key);
                console.log(this.inventory);
                key.inv = true;
                // Open the corresponding door immediately
                Object.values(this.doors).forEach(door => {
                    if (door.id === key.id) {
                        door.isOpen = true;
                        Object.values(this.enemies).forEach(enemy =>{
                            if (enemy.id === door.id){
                                enemy.active = true
                            }
                        })
                        this.openDoors[door.id] = door
                    }
                });
            }
        });
        

        const allKeys = Object.values(this.keys);
        const hasAllKeys = allKeys.every(key => this.inventory.includes(key));
        if (hasAllKeys) {
            // All 9 keys are in the inventory
            console.log("All keys collected");
            this.doors.door10.isOpen = true
        }

        this.player.update(this.inputKeys, this.prevInputKeys, this.map, this.doors, this.enemies)
        this.prevInputKeys = { ...this.inputKeys }
    }
    setupInputs() {
    window.addEventListener("keydown", (e) => {
        this.inputKeys[e.key] = true;
        this.enemies.enemy1.update(this.player, this.sword, this.map)
        this.enemies.enemy2.update(this.player, this.sword, this.map)
        this.enemies.enemy3.update(this.player, this.sword, this.map)
        this.enemies.enemy4.update(this.player, this.sword, this.map)
        this.enemies.enemy5.update(this.player, this.sword, this.map)
        this.enemies.enemy6.update(this.player, this.sword, this.map)
        this.enemies.enemy7.update(this.player, this.sword, this.map)
        this.enemies.enemy8.update(this.player, this.sword, this.map)
        this.enemies.enemy9.update(this.player, this.sword, this.map)
        this.enemies.enemy10.update(this.player, this.sword, this.map)
        this.enemies.enemy11.update(this.player, this.sword, this.map)
        this.enemies.enemy12.update(this.player, this.sword, this.map)
        this.enemies.enemy13.update(this.player, this.sword, this.map)
        this.enemies.enemy14.update(this.player, this.sword, this.map)
        this.enemies.enemy15.update(this.player, this.sword, this.map)
        this.enemies.enemy16.update(this.player, this.sword, this.map)

        //console.log(this.inputKeys);
    });
    window.addEventListener("keyup", (e) => {
        this.inputKeys[e.key] = false;
                Object.values(this.enemies).forEach(enemy => {
            if (this.player.x === enemy.x && this.player.y === enemy.y && !enemy.dead){
                this.player.health -= enemy.dmg
                
                
        }})
    });
    }
    loop(){
        this.update()
        this.draw()

        requestAnimationFrame(()=>this.loop())
    }

    start(){
        this.loop()
    }
}