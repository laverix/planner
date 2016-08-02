import { Component, ViewEncapsulation } from '@angular/core';

import { TopPanelComponent } from './../top-panel/top-panel'

import { SpheresComponent } from './../spheres/spheres'

@Component({
    selector: 'planner',
    templateUrl: './app/main/main.html',
    styleUrls: ['./app/main/reset.css', './app/main/main.css', './app/main/proxima.css'],
    encapsulation: ViewEncapsulation.None,
    directives: [TopPanelComponent, SpheresComponent]
})

export class AppComponent { }
