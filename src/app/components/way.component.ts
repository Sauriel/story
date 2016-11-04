import { Component, Input } from '@angular/core';
import {Waypoint} from '../models/waypoint'
import {Way} from '../models/way'
import {Type} from '../models/type';
import {Story} from '../models/story';

@Component({
  selector: 'way',
  templateUrl: './way.component.html'
})
export class WayComponent {

  @Input() ways: Way[];
  @Input() story: Story;
  way = new Way();

  public save() {
    if (this.way.id == null) {
    this.way.id = ++this.story.lastWayId;
    this.ways.push(this.way);
    this.way = new Way();
    }
  }

  onChange(selectedWayId) {
    for (let way of this.ways) {
      if (selectedWayId == way.id) {
      this.way = way;
      }
    }
  }
}
