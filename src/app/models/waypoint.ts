import {Serializable} from './serializable'

import {Way} from './way'

export class Waypoint implements Serializable<Waypoint> {
  id: number;
  title: string;
  content: string;
  ways: Way[];

  constructor() {
    this.ways = new Array();
  }

  deserialize(input) {
    if (input != null) {
      this.id = input.id;
      this.title = input.title;
      this.content = input.content;
      this.ways = new Array();
      if (input.ways != null) {
        for(let way of input.ways) {
          this.ways.push(new Way().deserialize(way));
        }
      }
    }
    return this;
  }
}
