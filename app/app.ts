import { Component } from '@angular/core';

import { TopPanelComponent } from './top-panel/top-panel'

import { SpheresComponent } from './spheres/spheres'

@Component({
    selector: 'planner',
    templateUrl: 'app/app.html',
    directives: [TopPanelComponent, SpheresComponent]
})

export class AppComponent { }
