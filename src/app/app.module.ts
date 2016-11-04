import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

import {StoryService} from './services/story.service';

import { AppComponent } from './app.component';
import { SettingsComponent } from './components/settings.component';
import { TypeComponent } from './components/type.component';
import { WayComponent } from './components/way.component';
import { WaypointComponent } from './components/waypoint.component';
import { BuildComponent } from './components/build.component';
import { ExperienceComponent } from './components/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    TypeComponent,
    WayComponent,
    WaypointComponent,
    BuildComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [StoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
