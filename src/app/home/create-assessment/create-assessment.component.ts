import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-assessment',
  template: `
    <app-assessment-stepper></app-assessment-stepper>
    `,
  styles: [

  ]
})
export class CreateAssessmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
