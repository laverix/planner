import { Component, ViewEncapsulation } from '@angular/core';

import { GoalComponent } from './../goal/goal';

@Component({
    selector: 'spheres',
    templateUrl: 'app/spheres/spheres.html',
    styleUrls: ['./app/spheres/spheres.css'],
    encapsulation: ViewEncapsulation.Native,
    directives: [GoalComponent],
    providers: [GoalComponent]

})

export class SpheresComponent {
    constructor(private goals: GoalComponent) {}

    spheres = [
        {
            title: 'Sport'
        },
        {
            title: 'Music'
        }
    ];

    addGoal() {
        this.goals.addGoal();

        console.log(
            this.goals
        );
    }

    addSphere() {
        this.spheres.push({
            title: 'Unknown'
        });
    }

    removeSphere(sphere: string) {
        this.spheres = this.spheres.filter(function (item) {
            return item.title !== sphere;
        });
    }

    changeTitle(newValue: string, oldValue: string) {
        this.spheres.map(function (item) {
            if (item.title === oldValue) {
                item.title = newValue;
            }
        });
    }
}
