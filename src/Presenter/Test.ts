import { type IUpdate, type IRendererUpdate

} from "../Interface/IUpdate"
import { GameEngine} from "./GameEngine"



export class Test implements IUpdate, IRendererUpdate {

  constructor(gameEngine: GameEngine) {
    console.log("TestUpdate initialized")

    gameEngine.AddUpdateObject(this)
    gameEngine.AddRendererUpdateObject(this)
  }

  Update() {
    console.log("TestUpdate Update called")
  }

  RendererUpdate(deltaTime: number) {
    console.log("TestUpdate RendererUpdate called")
  }
}
