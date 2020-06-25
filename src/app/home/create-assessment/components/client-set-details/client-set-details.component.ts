import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Clients } from 'src/app/models/clients';
import { CommonAssessmentService } from 'src/app/providers/common.assessment.service';

@Component({
  selector: 'app-client-set-details',
  templateUrl: './client-set-details.component.html',
  styleUrls: ['./client-set-details.component.scss']
})
export class ClientSetDetailsComponent implements OnInit, OnDestroy {

  public fullName: string;
  public clientObject: Clients;
  // public listOfDesignation = [
  //   {id: 1, name: 'Sr. Consultant'},
  //   {id: 2, name: 'Consultant'},
  //   {id: 3, name: 'Manager'},
  // ];
  public listOfDesignation = [];
  // public listOfIndustry = [
  //   {id: 1, name: 'IT Industry'},
  //   {id: 2, name: 'Real Estate'},
  //   {id: 3, name: 'Media'},
  // ];
  public listOfIndustry = [];
  public clientForm: NgForm;
  constructor(private commonAssessmentServices: CommonAssessmentService) {
    this.clientObject = new Clients();
   }

  ngOnInit(): void {
    this.initialPageLoad();
  }
  ngOnDestroy(): void {
    console.log('client class is destroyed');
    this.commonAssessmentServices.onClientLoad(false);
  }
  public onClientSubmit(clientForm: NgForm) {
    console.log('clientForm details ', clientForm.value.fullName);
    if (clientForm.valid) {
      this.commonAssessmentServices.setIsSecondStageSelected(true);
      localStorage.setItem('client', JSON.stringify(this.clientObject));
      localStorage.setItem('isClientFormValid', JSON.stringify(true));
      console.log('hello for form valis');
    } else {
      this.commonAssessmentServices.setIsSecondStageSelected(false);
    }
  }

  public initialPageLoad() {
    this.commonAssessmentServices.setTitleHeader('Client Details');
    this.commonAssessmentServices.getDesignationList()
                .subscribe(data => {
                  if (data && data.status === 'success' && data.message) {
                    this.listOfDesignation = data.message;
                  }
                });
    this.commonAssessmentServices.getIndustryList()
                .subscribe(data => {
                  if (data && data.status === 'success' && data.message) {
                    this.listOfIndustry = data.message;
                  }
                });
    this.commonAssessmentServices.onClientLoad(true);
    if (JSON.parse(localStorage.getItem('client')) !== null) {
      this.clientObject = JSON.parse(localStorage.getItem('client'));
      console.log('this.clientObject ', this.clientObject);
    }
    if (JSON.parse(localStorage.getItem('isClientFormValid')) !== null) {
      if (JSON.parse(localStorage.getItem('isClientFormValid')) === true) {
        this.commonAssessmentServices.setIsSecondStageSelected(true);
        this.commonAssessmentServices.onClientLoad(false);
      } else {
        this.commonAssessmentServices.setIsSecondStageSelected(false);
      }
    } else {
      this.commonAssessmentServices.setIsSecondStageSelected(false);
    }
  }

}
