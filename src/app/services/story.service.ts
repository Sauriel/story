import {Story} from '../models/story';

export class StoryService {
  story = new Story();

  public setStory(story: Story) {
    this.story = story;
  }

  public getStory(): Story {
    return this.story;
  }
}
