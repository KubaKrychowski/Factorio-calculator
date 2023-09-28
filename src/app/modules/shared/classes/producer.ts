import { BehaviorSubject } from "rxjs";
import { DirectionEnum } from "../enums/factory-project/direction.enum";

/**
* Class for producing structures on factory project planer
*/
export class Producer {
  private readonly productionTime: number;
  private readonly product: any;
  private interval: NodeJS.Timer | null = null;

  public xPosition: number;
  public yPosition: number;
  public outputXPosOffset: number;
  public outputYPosOffset: number;
  public outputDirection: DirectionEnum;
  public createdItem$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  /**
* @param productionTime - defines time of crafting/gathering 1 item
* @param product - output product
* @param xPosition - x coordinate on the grid
* @param xPosition - x coordinate on the grid
* @param yPosition - y coordinate on the grid
*/
  constructor(
    productionTime: number,
    product: any,
    xPosition: number,
    yPosition: number,
    outputXPosOffset: number,
    outputYPosOffset: number,
    outputDirection: DirectionEnum) {
    this.productionTime = productionTime;
    this.product = product;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.outputXPosOffset = outputXPosOffset;
    this.outputYPosOffset = outputYPosOffset;
    this.outputDirection = outputDirection;
  }

  public startProduction(): void {
    this.interval = setInterval(() => {
      //this.createdItem$?.next(this.product);
      console.log('created item at' + `${this.xPosition + this.outputXPosOffset}:${this.yPosition + this.outputYPosOffset} at ${this.outputDirection.toString()}`);
    }, this.productionTime * 1000);
  }

  public stopProduction(): void {
    if (!this.interval) {
      return;
    }
    console.log('stopped production');
    clearInterval(this.interval);
  }
}
