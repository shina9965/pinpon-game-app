import { v4 as uuidv4 } from "uuid";


export interface IGameObjectModel {
  GetShape(): string
  GetPosition(): { x: number, y: number }
  SetPosition(x: number, y: number): void
  GetSize(): { width: number, height: number }
  GetDirection(): { x: number, y: number }
  SetDirection(x: number, y: number): void
  GetColor(): string
  GetUUID(): string
}

export class GameObjectModel implements IGameObjectModel {

  private shape: string
  private position: { x: number, y: number }
  private size: { width: number, height: number }
  private direction: { x: number, y: number }
  private color: string
  private uuid: string

  constructor(shape: string, position: { x: number, y: number }, size: { width: number, height: number }, direction: { x: number, y: number }, color: string) {
    this.shape = shape
    this.position = position
    this.size = size
    this.direction = direction
    this.color = color
    this.uuid = uuidv4()
  }

  public GetShape() {
    return this.shape
  }

  public GetPosition() {
    return this.position
  }

  public SetPosition(x: number, y: number) {
    this.position = { x, y }
  }

  public GetSize() {
    return this.size
  }

  public GetDirection() {
    return this.direction
  }

  public SetDirection(x: number, y: number) {
    
  const length = Math.sqrt(x * x + y * y)

  if (length === 0) {
    this.direction = { x: 0, y: 0 }
    return
  }

  this.direction = {
    x: x / length,
    y: y / length
    }
  }

  public GetColor() {
    return this.color
  }

  public GetUUID() {
    return this.uuid
  }
}