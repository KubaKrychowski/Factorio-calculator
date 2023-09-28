import { ArmTypeEnum } from "../../enums/factory-project/arm-type.enum";
import { BeltTypeEnum } from "../../enums/factory-project/belt-type.enum";
import { SimplifiedBuildingModel } from "./simplified-building.model";

export interface BuildingConnectionModel {
  firstBuilding: SimplifiedBuildingModel;
  tracksCount: number;
  beltType: BeltTypeEnum;
  firstBuildingArmsCount: number;
  firstbuildingArmsType: ArmTypeEnum;
}
