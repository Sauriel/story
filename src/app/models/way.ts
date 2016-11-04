import {Serializable} from './serializable'

export class Way implements Serializable<Way> {
  id: number;
  title: string;
  targetWaypointId: number;
  typeId: number;

  deserialize(input) {
    if (input != null) {
      this.id = input.id;
      this.title = input.title;
      this.targetWaypointId = input.targetWaypointId;
      this.typeId = input.typeId;
    }
    return this;
  }
}
