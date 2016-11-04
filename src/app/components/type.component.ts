import { Component, Input } from '@angular/core';
import {Story} from '../models/story';
import {Type} from '../models/type';

@Component({
  selector: 'types',
  templateUrl: './type.component.html'
})
export class TypeComponent {

  @Input() story: Story;
  type = new Type();

  public add() {
    if (this.type.id == null) {
    this.type.id = ++this.story.lastTypeId;
    this.story.types.push(this.type);
    this.type = new Type();
    }
  }

  onChange(selectedTypeId) {
    for (let type of this.story.types) {
      if (selectedTypeId == type.id) {
      this.type = type;
      }
    }
  }
}
