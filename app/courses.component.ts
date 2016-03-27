import {Component} from 'angular2/core'

@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2>
        {{ title }}
        `
})

export class CoursesComponent{
    title: string = "The title of the courses page";
}