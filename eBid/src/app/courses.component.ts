import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector:'courses',
    template: `
        <h2>{{ getTitle() }}</h2>
        <ul>
            <li *ngFor="let course of courses">
            {{course}}</li>
        </ul>`
    
})


export class CoursesComponent {
    title = "List of courses";
    //logic for calling an HTTP service 
    //a component shouldnt include any logic except the presentation logic : it needs to be implementend in a service 
    //here we should call an HTTP endpoint to get the lists we call the service 
    
    courses;

    //the parameter is meant to create automatically an instance of the service and decoupled the dependency of the component from the service

    constructor(service: CoursesService){
        this.courses =service.getCourses();
    }
    

    getTitle(){
        return this.title;
    }

    
}