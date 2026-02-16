import './style.css'
import { Game } from './Classes/Game'

window.addEventListener('load',()=>{
  const game = new Game('game-canv')
  game.start()
})