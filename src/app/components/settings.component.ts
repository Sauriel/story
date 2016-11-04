import { Component, Input } from '@angular/core';
import {Story} from '../models/story';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html'
})
export class SettingsComponent {

  @Input() story: Story;
}
