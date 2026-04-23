// GameObject.ts
import GameObjectModel from "../Model/GameObjectModel"
import IGameObjectModal from "../Model/GameObjectModel"
import IRenderer from "../View/Renderer"


export default abstract class GameObject{

  abstract Update(deltaTime: number): void
  abstract Start(): void
  

  protected gameObjectModel : IGameObjectModal

  constructor() {
    console.log('GameObject initialized')
    this.gameObjectModel = new GameObjectModel()
    this.Start()
  }

  public Rendering(renderer: IRenderer) {

    
  }
}