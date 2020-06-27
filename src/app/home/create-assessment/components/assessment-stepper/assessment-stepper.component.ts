import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonAssessmentService } from 'src/app/providers/common.assessment.service';

@Component({
  selector: 'app-assessment-stepper',
  templateUrl: './assessment-stepper.component.html',
  styleUrls: ['./assessment-stepper.component.scss']
})
export class AssessmentStepperComponent implements OnInit, OnDestroy {
  public isSelected = false;
  public isSelectedClient = false;
  public isSelectedOffice = false;
  public title: Observable<string>;
  public isLoadedAssessSelected = false;
  public isLoadedClient = false;
  public isLoadedOffice = false;

  constructor(private commonAssessmentServices: CommonAssessmentService) {
                window.addEventListener('beforeunload', () => {
                  localStorage.removeItem('assessmentSelected');
                  localStorage.removeItem('isClientFormValid');
                  localStorage.removeItem('client');
                  localStorage.removeItem('isOfficeFormValid');
                  localStorage.removeItem('office');
                });
                this.commonAssessmentServices.isLoadedAssessmentSelection.subscribe(data => {
      if (data) {
        this.isLoadedAssessSelected = data;
      } else {
        this.isLoadedAssessSelected = false;
      }
    });
                this.commonAssessmentServices.isLoadedClient.subscribe(data => {
      if (data) {
        this.isLoadedClient = data;
      } else {
        this.isLoadedClient = false;
      }
    });
                this.commonAssessmentServices.isLoadedOffice.subscribe(data => {
      if (data) {
        this.isLoadedOffice = data;
      } else {
        this.isLoadedOffice = false;
      }
    });
                this.commonAssessmentServices.isSelected.subscribe(data => {
      if (data) {
          this.isSelected = data;
      } else {
        this.isSelected = data;
      }
    });
                this.commonAssessmentServices.isSelectedClient.subscribe(data => {
      if (data) {
          this.isSelectedClient = data;
      } else {
        this.isSelectedClient = data;
    }
    });
                this.commonAssessmentServices.isSelectedOffice.subscribe(data => {
      if (data) {
          this.isSelectedOffice = data;
      } else {
        this.isSelectedOffice = data;
      }
    });
  }

  ngOnInit(): void {
    this.title = this.commonAssessmentServices.title;
    // this.commonAssessmentServices.title.subscribe(data => {
    //   if (data) {
    //     this.title = '';
    //     this.title = data;
    //     console.log('Title ', this.title);
    //   }
    // });
  }
  ngOnDestroy() {
    console.log('on destroy is called');
    this.commonAssessmentServices.setIsFirstStageSelected(false);
    this.commonAssessmentServices.setIsSecondStageSelected(false);
    this.commonAssessmentServices.setIsThirdStageSelected(false);
    localStorage.setItem('assessmentSelected', null);
    localStorage.setItem('client', null);
    localStorage.setItem('isClientFormValid', null);
    localStorage.setItem('office', null);
    localStorage.setItem('isOfficeFormValid', null);
  }
}
