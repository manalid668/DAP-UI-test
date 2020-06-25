import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AssessmentTypes } from '../models/assessment-types';
import { Clients } from '../models/clients';

@Injectable({
  providedIn: 'root'
})
export class CommonAssessmentService {
  private setTitle = new BehaviorSubject('');
  public title = this.setTitle.asObservable();
  private isFirstStage = new BehaviorSubject(false);
  public isSelected = this.isFirstStage.asObservable();
  private isSecondStage = new BehaviorSubject(false);
  public isSelectedClient = this.isSecondStage.asObservable();
  private isThirdStage = new BehaviorSubject(false);
  public isSelectedOffice = this.isThirdStage.asObservable();
  public setClientSelected = new BehaviorSubject(false);
  public isLoadedClient = this.setClientSelected.asObservable();
  public setAssessmentTypeSelected = new BehaviorSubject(false);
  public isLoadedAssessmentSelection = this.setAssessmentTypeSelected.asObservable();
  public setOfficeSelected = new BehaviorSubject(false);
  public isLoadedOffice = this.setOfficeSelected.asObservable();
  // private dataStoreClients: {
  //   clientList: Clients[]
  // };
  private dataStoreClients: any;
  // ------ working ----
  // private dataStoreAssessmentTypes: {
  //   assessmentTypesList: AssessmentTypes[]
  // };
  // ----working-------
  private dataStoreAssessmentTypes: any;
  private clients: BehaviorSubject<Clients[]>;
  private assessmentTypes: BehaviorSubject<AssessmentTypes[]>;
  constructor(private http: HttpClient) {
    this.clients = new BehaviorSubject<Clients[]>([]);
    this.dataStoreClients = { clientList: []};
    this.assessmentTypes = new BehaviorSubject<AssessmentTypes[]>([]);
    this.dataStoreAssessmentTypes = { assessmentTypesList: []};
   }
   setTitleHeader(title: string) {
     this.setTitle.next(title);
   }
   setIsFirstStageSelected(isSelected: boolean) {
     this.isFirstStage.next(isSelected);
   }
   onAssessmentLoad(isLoaded: boolean) {
    // tslint:disable-next-line:no-debugger
    debugger;
    this.setAssessmentTypeSelected.next(isLoaded);
   }
   setIsSecondStageSelected(isSelected: boolean) {
     this.isSecondStage.next(isSelected);
   }
   onClientLoad(isLoaded: boolean) {
     this.setClientSelected.next(isLoaded);
   }
   setIsThirdStageSelected(isSelected: boolean) {
    this.isThirdStage.next(isSelected);
    console.log('service office');
  }
  onOfficeLoad(isLoaded: boolean) {
     this.setOfficeSelected.next(isLoaded);
   }
   getDesignationList(): Observable<any> {
    const url = 'http://localhost:3007/getdesignations';
    return this.http.get(url);
   }
   getIndustryList(): Observable<any> {
    const url = 'http://localhost:3007/getindustry';
    return this.http.get(url);
   }
   getCountryList(): Observable<any> {
    const url = 'http://localhost:3007/getcountry';
    return this.http.get(url);
   }
   getCityList(countryId: number): Observable<any> {
    const url = 'http://localhost:3007/getcity' + '/' + countryId;
    return this.http.get(url);
   }
   getDepartmentList(): Observable<any> {
    const url = 'http://localhost:3007/getdepartment';
    return this.http.get(url);
   }
   getTeamList(): Observable<any> {
    const url = 'http://localhost:3007/getTeams';
    return this.http.get(url);
   }
   getQuestionnaireList(): Observable<any> {
    const url = 'http://localhost:3007/getquestionaire';
    return this.http.get(url);
   }
   getClientsDetails(): Observable<any>{
    this.dataStoreClients = {
    status: 'success',
    code: 'ASSESSMENT-MS',
    message:
    [
      {
          clientID: 1,
          industry: 'credit Rating Agency',
          createdby: 'Admin 1',
          createdDate: '2020-06-16T18:30:00.000Z',
          FullName: 'abcd',
          designation: 'ab',
          email: 'ab@ab.com',
          phonenumber: '999',
          companyName: 'ab.pvt.ltd',
          gender: 'F'
      },
      {
          clientID: 2,
          industry: 'Automobile',
          createdby: 'Admin 2',
          createdDate: '2020-06-16T18:30:00.000Z',
          FullName: 'bb',
          designation: 'vp',
          email: 'vp@bb.com',
          phonenumber: '747',
          companyName: 'bb.pvt.ltd',
          gender: 'F'
      },
      {
          clientID: 3,
          industry: 'Construction machinery',
          createdby: 'Admin 3',
          createdDate: '2020-06-16T18:30:00.000Z',
          FullName: 'cc',
          designation: 'mm',
          email: 'mm@cc.com',
          phonenumber: '88',
          companyName: 'cc.pvt.ltd',
          gender: 'F'
      },
      {
          clientID: 4,
          industry: 'Invesment Banking',
          createdby: 'Admin 4',
          createdDate: '2020-06-16T18:30:00.000Z',
          FullName: 'dd',
          designation: 'kk',
          email: 'kk@dd@gmail.com',
          phonenumber: '590',
          companyName: 'dd.pvt.ltd',
          gender: 'M'
      },
      {
          clientID: 5,
          industry: 'multinational conglemerate',
          createdby: 'Admin 5',
          createdDate: '2020-06-16T18:30:00.000Z',
          FullName: 'jj',
          designation: 'tt',
          email: 'tt@jj.com',
          phonenumber: '121',
          companyName: 'jj.pvt.ltd',
          gender: 'F'
      },
      {
          clientID: 6,
          industry: 'Appliances',
          createdby: 'Admin 6',
          createdDate: '2020-06-16T18:30:00.000Z',
          FullName: 'ap',
          designation: 'ss',
          email: 'ss@ap.com',
          phonenumber: '11',
          companyName: 'ap.pvt.ltd',
          gender: 'F'
      },
      {
          clientID: 7,
          industry: 'medicine',
          createdby: 'Admin',
          createdDate: '2020-06-17T18:30:00.000Z',
          FullName: 'Arpan Ghosh',
          designation: 'Trainee',
          email: 'a@p.com',
          phonenumber: '987',
          companyName: 'pwc-india',
          gender: 'F'
      },
      {
          clientID: 8,
          industry: 'advertise',
          createdby: 'Admin',
          createdDate: '2020-06-17T18:30:00.000Z',
          FullName: 'Manali',
          designation: 'SC',
          email: 'manali@p.com',
          phonenumber: '123',
          companyName: 'xyz',
          gender: 'F'
      }
  ]};
    const url = 'http://localhost:3007/getallclientdetails';
    return this.http.get(url);
    // this.clients.next(Object.assign({}, this.dataStoreClients).clientList);
    // return of(this.dataStoreClients);
}
  // ---------- working ------------------
  // getAssessmentTypesLOV() {
  //   this.dataStoreAssessmentTypes.assessmentTypesList =  [
  //     {assessmenTypeId: 'A001', assessmentTypeName: 'Software Testing Practices Assessment', isSelected: false},
  //     {assessmenTypeId: 'A002', assessmentTypeName: 'Cybersecurity Testing Assessment', isSelected: false},
  //     {assessmenTypeId: 'A003', assessmentTypeName: 'Agile Maturity Assessment', isSelected: false},
  //     {assessmenTypeId: 'A004', assessmentTypeName: 'DevOps Assessment', isSelected: false},
  //     {assessmenTypeId: 'A005', assessmentTypeName: 'Software Test Team Assessment', isSelected: false},
  //     {assessmenTypeId: 'A006', assessmentTypeName: 'Software Life Cycle (SDLC) Assessment', isSelected: false},
  //     {assessmenTypeId: 'A007', assessmentTypeName: 'Software Test Team Assessment', isSelected: false}
  //   ];
  //   this.assessmentTypes.next(this.dataStoreAssessmentTypes.assessmentTypesList);
  // }
  // getAssessmentTypesLOV(): Observable<AssessmentTypes[]>{
  //   this.dataStoreAssessmentTypes.assessmentTypesList =  [
  //     {assessmentID: 1, assessmentType: 'Software Testing Practices Assessment', iselected: false, assessmentDate: '2020-06-23'},
  //     {assessmentID: 2, assessmentType: 'Cybersecurity Testing Assessment', iselected: false, assessmentDate: '2020-06-23'},
  //     {assessmentID: 3, assessmentType: 'Agile Maturity Assessment', iselected: false, assessmentDate: '2020-06-23'},
  //     {assessmentID: 4, assessmentType: 'DevOps Assessment', iselected: false, assessmentDate: '2020-06-23'},
  //     {assessmentID: 5, assessmentType: 'Software Test Team Assessment', iselected: false, assessmentDate: '2020-06-23'},
  //     {assessmentID: 6, assessmentType: 'Software Life Cycle (SDLC) Assessment', iselected: false, assessmentDate: '2020-06-23'},
  //     {assessmentID: 7, assessmentType: 'Software Test Team Assessment', iselected: false, assessmentDate: '2020-06-23'}
  //   ];
  //   this.assessmentTypes.next(this.dataStoreAssessmentTypes.assessmentTypesList);
  //   return of(this.dataStoreAssessmentTypes.assessmentTypesList);
  // }
  // ---------- working ------------------
  getAssessmentTypesLOV(): Observable<any>{
    // ----------working------------------------
    // this.dataStoreAssessmentTypes.assessmentTypesList =  [
    //   {assessmentID: 1, assessmentType: 'Software Testing Practices Assessment', iselected: false, assessmentDate: '2020-06-23'},
    //   {assessmentID: 2, assessmentType: 'Cybersecurity Testing Assessment', iselected: false, assessmentDate: '2020-06-23'},
    //   {assessmentID: 3, assessmentType: 'Agile Maturity Assessment', iselected: false, assessmentDate: '2020-06-23'},
    //   {assessmentID: 4, assessmentType: 'DevOps Assessment', iselected: false, assessmentDate: '2020-06-23'},
    //   {assessmentID: 5, assessmentType: 'Software Test Team Assessment', iselected: false, assessmentDate: '2020-06-23'},
    //   {assessmentID: 6, assessmentType: 'Software Life Cycle (SDLC) Assessment', iselected: false, assessmentDate: '2020-06-23'},
    //   {assessmentID: 7, assessmentType: 'Software Test Team Assessment', iselected: false, assessmentDate: '2020-06-23'}
    // ];
    // ---------------------working-----------------------
    // ---------------------working-----------------------
    // this.dataStoreAssessmentTypes = {
    //   status: 'success',
    //   code: 'ASSESSMENT-MS',
    //   message:
    //   [
    //     {
    //       assessmentID: 1,
    //       assessmentType: 'Software Testing Practices Assessment',
    //       assessmentdate: '2020-06-16T18:30:00.000Z',
    //       iselected: false
    //   },
    //   {
    //       assessmentID: 2,
    //       assessmentType: 'Cybersecurity Testing Assessment',
    //       assessmentdate: '2020-06-16T18:30:00.000Z',
    //       iselected: false
    //   },
    //   {
    //       assessmentID: 3,
    //       assessmentType: 'Agile Maturity Assessment',
    //       assessmentdate: '2020-06-16T18:30:00.000Z',
    //       iselected: false
    //   },
    //   {
    //       assessmentID: 4,
    //       assessmentType: 'DevOps Assessment',
    //       assessmentdate: '2020-06-16T18:30:00.000Z',
    //       iselected: false
    //   },
    //   {
    //       assessmentID: 5,
    //       assessmentType: 'Software Test Team Assessment',
    //       assessmentdate: '2020-06-16T18:30:00.000Z',
    //       iselected: false
    //   },
    //   {
    //       assessmentID: 6,
    //       assessmentType: 'Software Life Cycle(SDLC) Assessment',
    //       assessmentdate: '2020-06-16T18:30:00.000Z',
    //       iselected: false
    //   },
    //   {
    //       assessmentID: 7,
    //       assessmentType: 'Software Test Tool and Automation Assessment',
    //       assessmentdate: '2020-06-16T18:30:00.000Z',
    //       iselected: false
    //   },
    //   {
    //       assessmentID: 8,
    //       assessmentType: 'Third Party Risk Management',
    //       assessmentdate: '2020-06-16T18:30:00.000Z',
    //       iselected: false
    //   }
    // ]};
    // this.assessmentTypes.next(this.dataStoreAssessmentTypes);
    // return of(this.dataStoreAssessmentTypes);
    // ---------------------working-----------------------
    const url = 'http://localhost:3007/getassessments';
    return this.http.get(url);
  }
  getAssessmentType(): Observable<AssessmentTypes[]>{
    return this.assessmentTypes.asObservable();
  }
}
