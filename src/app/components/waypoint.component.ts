import { Component, Input } from '@angular/core';
import {Story} from '../models/story';
import {Waypoint} from '../models/waypoint'

@Component({
  selector: 'waypoint',
  templateUrl: './waypoint.component.html'
})
export class WaypointComponent {

  @Input() story: Story;
  waypoint = new Waypoint();

  public save() {
    if (this.waypoint.id == null) {
    this.waypoint.id = ++this.story.lastWaypointId;
    this.story.waypoints.push(this.waypoint);
    this.waypoint = new Waypoint();
    }
  }

  onChange(selectedWaypointId) {
    for (let waypoint of this.story.waypoints) {
      if (selectedWaypointId == waypoint.id) {
      this.waypoint = waypoint;
      }
    }
  }
}
