import type { UUIDTypes } from "uuid"
import { GameObject, type IGameObject } from "./GameObject"

export class GameObjectPresenter {

  private static GameObjectList: IGameObject[] = []

  constructor() {
    console.log("GameObjectPresenter initialized")
  }

  public GetGameObjectList(value: number | string){

    if(typeof value === "number"){
      return GameObjectPresenter.GameObjectList[value]
    }

    //UUIDでの取得は未実装
    return null
  }


}