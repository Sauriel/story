import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {StoryService} from '../services/story.service';
import {Story} from '../models/story';

@Component({
  selector: 'app',
  templateUrl: './build.component.html'
})
export class BuildComponent {
  story: Story;
  downloadUrl: SafeHtml;
  file:File

  constructor(private sanitizer: DomSanitizer, private storyService: StoryService) {
    this.sanitizer = sanitizer;
  }

  ngOnInit(): void {
    this.story = this.storyService.getStory();
  }

  ngOnDestroy(): void {
    this.storyService.setStory(this.story);
  }

  public export() {
    let dataString = JSON.stringify(this.story);
   let blob = new Blob([dataString], { type: 'application/json' });
   this.downloadUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob));
  }

  public download() {
    this.downloadUrl = null;
  }

  public change(files) {
    this.file = files.files[0];
  }

  public import() {
    let fileReader:FileReader = new FileReader();
    let _this = this;
    fileReader.onloadend = function(e){
        _this.story = new Story().deserialize(JSON.parse(fileReader.result));
        _this.file = null;
        _this.storyService.setStory(_this.story);
    }
    fileReader.readAsText(this.file);
  }
}
