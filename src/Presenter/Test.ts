import { type IUpdate } from "../Interface/IUpdate"
import { GameEngine, type IGameEngine } from "./GameEngine"



export class Test implements IUpdate {

  constructor() {
    console.log("TestUpdate initialized")

    GameEngine.AddUpdateObject(this)
  }

  Update(): void {
    console.log("TestUpdate Update called")
  }
}