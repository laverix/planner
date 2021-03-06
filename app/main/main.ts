import { Component, ViewEncapsulation } from '@angular/core';

import { SpheresComponent } from './../spheres/spheres';

import { TimelineComponent } from './../timeline/timeline';

@Component({
    selector: 'planner',
    templateUrl: './app/main/main.html',
    styleUrls: ['./app/main/reset.css', './app/main/main.css', './app/main/proxima.css'],
    encapsulation: ViewEncapsulation.None,
    directives: [TimelineComponent, SpheresComponent]
})

export class AppComponent { }
