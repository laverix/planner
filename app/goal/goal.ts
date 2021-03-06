import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'goal',
    templateUrl: './app/goal/goal.html',
    styleUrls: ['./app/goal/goal.css'],
    encapsulation: ViewEncapsulation.Native

})

export class GoalComponent {
    goals = [
        {
            title: 'Rest',
            description: 'I just need it'
        },
        {
            title: 'Go to Studio',
            description: 'I just need it'
        }
    ];

    addGoal () {
        this.goals.push({
            title: 'Set Goal',
            description: 'Description'
        });
    }

    removeGoal (goals: string) {
        this.goals = this.goals.filter(function (item) {
            return item.title !== goals;
        });
    }
}
