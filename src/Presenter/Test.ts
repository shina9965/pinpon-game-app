import { type IUpdate, type IRendererUpdate

} from "../Interface/IUpdate"
import { GameEngine} from "./GameEngine"



export class Test implements IUpdate, IRendererUpdate {

  constructor() {
    console.log("TestUpdate initialized")

    GameEngine.AddUpdateObject(this)
    GameEngine.AddRendererUpdateObject(this)
  }

  Update(): void {
    console.log("TestUpdate Update called")
  }

  RendererUpdate(deltaTime: number): void {
    console.log("TestUpdate RendererUpdate called")
  }
}
