import { Component, Input } from '@angular/core';
import {Story} from '../models/story';
import {Waypoint} from '../models/waypoint';
import {StoryService} from '../services/story.service';

@Component({
  selector: 'app',
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  story: Story;
  currentWaypoint: Waypoint;

  constructor(private storyService: StoryService) { }

  ngOnInit(): void {
    this.story = this.storyService.getStory();
    this.selectWaypoint(this.story.startWaypointId);
  }

  ngOnDestroy(): void {
    this.storyService.setStory(this.story);
  }

  selectWaypoint(waypointId: number) {
    for (let waypoint of this.story.waypoints) {
      if (waypoint.id == waypointId) {
        this.currentWaypoint = waypoint;
      }
    }
  }

  getTypeColor(typeId: number): string {
    for (let type of this.story.types) {
      if (type.id == typeId) {
        return type.color;
      }
    }
  }
}
