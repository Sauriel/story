import {Serializable} from './serializable'

import {Type} from './type'
import {Waypoint} from './waypoint'

export class Story implements Serializable<Story> {
  title: string;
  description: string;
  types: Type[];
  waypoints: Waypoint[];
  startWaypointId: number;
  lastTypeId: number;
  lastWayId: number;
  lastWaypointId: number;

  constructor() {
    this.types = new Array();
    this.waypoints = new Array();
    this.lastTypeId = 0;
    this.lastWayId = 0;
    this.lastWaypointId = 0;
  }

  deserialize(input) {
    if (input != null) {
      this.title = input.title;
      this.description = input.description;
      this.types = new Array();
      if (input.types != null) {
        for(let type of input.types) {
          this.types.push(new Type().deserialize(type));
        }
      }
      this.waypoints = new Array();
      if (input.types != null) {
        for(let waypoint of input.waypoints) {
          this.waypoints.push(new Waypoint().deserialize(waypoint));
        }
      }
      this.startWaypointId = input.startWaypointId;
      this.lastTypeId = input.lastTypeId;
      this.lastWayId = input.lastWayId;
      this.lastWaypointId = input.lastWaypointId;
    }
    return this;
  }
}
