import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssessmentTypes } from 'src/app/models/assessment-types';
import { CommonAssessmentService } from 'src/app/providers/common.assessment.service';

@Component({
  selector: 'app-assessment-create-details',
  templateUrl: './assessment-create-details.component.html',
  styleUrls: ['./assessment-create-details.component.scss']
})
export class AssessmentCreateDetailsComponent implements OnInit, OnDestroy {
  // public assessmentTypesList: Observable<AssessmentTypes[]>;
  public assessmentTypesList: AssessmentTypes[];
  public pageTitle: string;
  public isSelected = false;
  public selectedCount = 0;
  errorMessage: string;

  constructor(private commonAssessmentServices: CommonAssessmentService,
              private route: ActivatedRoute) {
                console.log('hello');
               }

  ngOnInit(): void {
    this.initialPageLoad();
  }

  public initialPageLoad() {
    this.commonAssessmentServices.setTitleHeader('Select Assessment Type');
    this.commonAssessmentServices.onAssessmentLoad(true);
    if (JSON.parse(localStorage.getItem('assessmentSelected')) !== null) {
      this.assessmentTypesList = JSON.parse(localStorage.getItem('assessmentSelected'));
      console.log('this.assessmentTypesList ', this.assessmentTypesList);
      this.sendMessage();
    } else {
      this.route.data.subscribe(data => {
        if (data && data.resolvedAssessmentType && data.resolvedAssessmentType.response) {
          this.assessmentTypesList = data.resolvedAssessmentType.response.message;
          this.assessmentTypesList.forEach(item => {
              console.log('item ', item.assessmentType);
          });
        }
        console.log('in data error');
        if (data.resolvedAssessmentType.error) {
          this.errorMessage = data.resolvedAssessmentType.error;
          this.commonAssessmentServices.openModal(this.errorMessage);
        }
      }, error => {
        console.log('in catch error');
        console.log(error);
        this.commonAssessmentServices.openModal(this.errorMessage);
      });
    }
    // ---------- working ------------------
    // this.route.data.subscribe(data => {
    //   this.assessmentTypesList = data.resolvedAssessmentType.assessmentType;
    //   this.errorMessage = data.resolvedAssessmentType.error;
    // });
    // ---------- working ------------------

    // console.log('hello--1', this.route.snapshot.data.resolvedAssessmentType);
    // const tempObs: AssessmentTypeResolver = this.route.snapshot.data.resolvedAssessmentType;
    // this.assessmentTypesList = tempObs.assessmentType;
    //   // this.pageTitle = this.route.snapshot.data.pageTitle;
    //   // const assessmentTypeResolver: AssessmentTypeResolver = this.route.snapshot.data.resolvedAssessmentType;
    // this.errorMessage = tempObs.error;
      // this.assessmentTypesList = assessmentTypeResolver.assessmentType;
      // console.log('list ', this.assessmentTypesList);
    // this.assessmentTypesList = this.commonAssessmentServices.getAssessmentType();
    // this.commonAssessmentServices.getAssessmentTypesLOV();
  }
  public sendMessage() {
    // this.assessmentTypesList.subscribe((data) => {
    //     const tempArr = data;
    //     console.log('tempArr ', tempArr.length);
    //     tempArr.forEach(item => {
    //       if (item.isSelected) {
    //         this.selectedCount = this.selectedCount + 1;
    //       }
    //     });
    //     if (this.selectedCount > 0) {
    //       console.log('this.selectedCount ', this.selectedCount);
    //       this.selectedCount = 0;
    //       this.commonAssessmentServices.setIsFirstStageSelected(true);
    //     } else {
    //       this.commonAssessmentServices.setIsFirstStageSelected(false);
    //     }
    // });
    this.assessmentTypesList.forEach(item => {
            if (item.isSelected) {
              this.selectedCount = this.selectedCount + 1;
            }
          });
    if (this.selectedCount > 0) {
            console.log('this.selectedCount ', this.selectedCount);
            this.selectedCount = 0;
            localStorage.setItem('assessmentSelected', JSON.stringify(this.assessmentTypesList));
            this.commonAssessmentServices.setIsFirstStageSelected(true);
            this.commonAssessmentServices.onAssessmentLoad(false);
          } else {
            this.commonAssessmentServices.setIsFirstStageSelected(false);
          }
  }
  ngOnDestroy(): void {
    this.commonAssessmentServices.onAssessmentLoad(false);
  }
}
