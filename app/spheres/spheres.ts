import { Component, ViewEncapsulation} from '@angular/core';

import { GoalComponent } from './../goal/goal';

@Component({
    selector: 'spheres',
    templateUrl: 'app/spheres/spheres.html',
    styleUrls: ['./app/spheres/spheres.css'],
    encapsulation: ViewEncapsulation.Native,
    directives: [GoalComponent]
})

export class SpheresComponent {
    spheres: any[];

    constructor () {
        this.spheres = [
            {
                title: 'Sport'
            },
            {
                title: 'Music'
            }
        ];
    }

    addSphere () {
        this.spheres.push({
            title: 'Unknown'
        });
    }

    removeSphere (sphere: string) {
        this.spheres = this.spheres.filter(function (item) {
            return item.title !== sphere;
        });
    }
}
