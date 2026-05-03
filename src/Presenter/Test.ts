import { type IUpdate } from "../Interface/IUpdate"
import { GameEngine} from "./GameEngine"



export class Test implements IUpdate {

  constructor() {
    console.log("TestUpdate initialized")

    GameEngine.AddUpdateObject(this)
  }

  Update(): void {
    console.log("TestUpdate Update called")
  }
}