

export interface IRigidBodyModel {
  GetDeltatime(): number
  SetDeltatime(deltaTime: number): void
}

export class RigidBodyModel implements IRigidBodyModel {

  private deltaTime: number

  constructor() {
    this.deltaTime = 0
  }

  public GetDeltatime() {
    return this.deltaTime
  }

  public SetDeltatime(deltaTime: number) {
    this.deltaTime = deltaTime
  }
}