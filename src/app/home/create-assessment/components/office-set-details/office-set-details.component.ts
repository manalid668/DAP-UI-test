import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Office } from 'src/app/models/office';
import { CommonAssessmentService } from 'src/app/providers/common.assessment.service';

@Component({
  selector: 'app-office-set-details',
  templateUrl: './office-set-details.component.html',
  styleUrls: ['./office-set-details.component.scss']
})
export class OfficeSetDetailsComponent implements OnInit, OnDestroy {
  datePickerConfig: Partial<BsDatepickerConfig>;
  public officeObject: Office;
  public listOfCountries = [];
  public listOfCities = [];
  public listOfDepts = [];
  public listOfTeams = [];
  public listOfQuestionnaires = [];
  public listOfIndustry = [
    {id: 1, name: 'IT Industry'},
    {id: 2, name: 'Real Estate'},
    {id: 3, name: 'Media'},
  ];
  data: Date;
  public selectedDate: string;
  isloaded = false;
  constructor(private commonAssessmentServices: CommonAssessmentService) {
    this.officeObject = new Office();
    this.datePickerConfig = Object.assign({},
      { containerClass: 'theme-orange',
      showWeekNumbers: false,
      minDate: new Date(),
      dateInputFormat: 'DD/MM/YYYY',
      placement: 'right'
    });
   }

   ngOnInit(): void {
    this.initialPageLoad();
  }
  ngOnDestroy(): void {
    console.log('office class is destroyed');
    this.commonAssessmentServices.onOfficeLoad(false);
  }
  public initialPageLoad() {
    this.commonAssessmentServices.setTitleHeader('Office Details');
    this.commonAssessmentServices.getCountryList()
                .subscribe(data => {
                  if (data && data.status === 'success' && data.message) {
                    this.listOfCountries = data.message;
                  }
                });
    this.commonAssessmentServices.getDepartmentList()
                .subscribe(data => {
                  if (data && data.status === 'success' && data.message) {
                    this.listOfDepts = data.message;
                  }
                });
    this.commonAssessmentServices.getTeamList()
                .subscribe(data => {
                  if (data && data.status === 'success' && data.message) {
                    this.listOfTeams = data.message;
                  }
                });
    this.commonAssessmentServices.getQuestionnaireList()
                .subscribe(data => {
                  if (data && data.status === 'success' && data.message) {
                    this.listOfQuestionnaires = data.message;
                  }
                });
    this.commonAssessmentServices.onOfficeLoad(true);
    if (JSON.parse(localStorage.getItem('office')) !== null) {
      this.officeObject = JSON.parse(localStorage.getItem('office'));
      console.log('this.officeObject ', this.officeObject);
      if (this.officeObject && this.officeObject.country) {
        const cid = +this.officeObject.country;
        this.commonAssessmentServices.getCityList(cid)
                .subscribe(data => {
                  if (data && data.status === 'success' && data.message) {
                    this.listOfCities = data.message;
                  }
                });
      }
    }
    if (JSON.parse(localStorage.getItem('isOfficeFormValid')) !== null) {
      if (JSON.parse(localStorage.getItem('isOfficeFormValid')) === true) {
        this.commonAssessmentServices.setIsThirdStageSelected(true);
        this.isloaded = true;
      } else {
        this.commonAssessmentServices.setIsThirdStageSelected(false);
      }
    } else {
      this.commonAssessmentServices.setIsThirdStageSelected(false);
    }
  }

  public onOfficeSubmit(officeForm: NgForm) {
    console.log('on change is fired');
    console.log('officeForm ', officeForm);
    if (officeForm.valid) {
      this.commonAssessmentServices.setIsThirdStageSelected(true);
      this.commonAssessmentServices.onOfficeLoad(false);
      if (this.selectedDate) {
        console.log('set date');
        this.officeObject.createdDate = this.selectedDate;
        this.selectedDate = null;
      }
      console.log('office details after set ', this.officeObject);
      localStorage.setItem('office', JSON.stringify(this.officeObject));
      localStorage.setItem('isOfficeFormValid', JSON.stringify(true));
    } else {
      console.log('changed', this.officeObject);
      this.commonAssessmentServices.setIsThirdStageSelected(false);
    }
  }
  public getCityList(paramVal) {
    console.log('paramVal ', paramVal);
    const param = +paramVal.target.value;
    this.commonAssessmentServices.getCityList(param)
                .subscribe(data => {
                  if (data && data.status === 'success' && data.message) {
                    this.listOfCities = data.message;
                  }
                });
  }

  public onchangeDt(dt, officeForm: NgForm): void {
    console.log('11 ', dt);
    // console.log('112 ', dt.value);
    // console.log('value2 ', dt.target.value);
    this.data = dt;
    console.log('mm ', this.data.getMonth() + 1);
    console.log('dd ', this.data.getDate());
    console.log('yyyy ', this.data.getFullYear());
    console.log('form details ', JSON.stringify(officeForm.value));
    console.log('office details ', this.officeObject);
    this.selectedDate = this.data.getDate() + '/' + (this.data.getMonth() + 1 ) + '/' + this.data.getFullYear();
    console.log('this.selectedDate in onchangeDt ', this.selectedDate);
    if (this.data) {
      this.onOfficeSubmit(officeForm);
    }
  }

  // public onchangeDt(value, officeForm: NgForm): void {
  //   this.data = value;
  //   console.log('mm ', this.data.getMonth() + 1);
  //   console.log('dd ', this.data.getDate());
  //   console.log('yyyy ', this.data.getFullYear());
  //   console.log('form details ', JSON.stringify(officeForm.value));
  //   console.log('office details ', this.officeObject);
  //   this.selectedDate = this.data.getDate() + '/' + (this.data.getMonth() + 1 ) + '/' + this.data.getFullYear();
  //   console.log('this.selectedDate in onchangeDt ', this.selectedDate);
  //   if (this.data) {
  //     this.onOfficeSubmit(officeForm);
  //   }
  //   // officeForm.controls.createdDte.setValue(selectedDate);
  //   // console.log('form details after change', JSON.stringify(officeForm.value));
  //   // if (this.officeObject) {
  //   //   const selectedDate = this.data.getDate() + '/' + this.data.getMonth() + 1 + '/' + this.data.getFullYear();
  //   //   this.officeObject.createdDate = selectedDate;
  //   // }
  //   // if (officeForm.valid) {
  //   //   console.log('valid');
  //   // } else {
  //   //   console.log('not-valid');
  //   // }
  //   // this.onOfficeSubmit(officeForm);
  // }
//   function GetFormattedDate() {
//     var todayTime = new Date();
//     var month = format(todayTime .getMonth() + 1);
//     var day = format(todayTime .getDate());
//     var year = format(todayTime .getFullYear());
//     return month + "/" + day + "/" + year;
// }

}
