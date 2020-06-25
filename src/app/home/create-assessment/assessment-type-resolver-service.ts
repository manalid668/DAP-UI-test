import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AssessmentTypeResolver } from 'src/app/models/assessment-types';
import { CommonAssessmentService } from 'src/app/providers/common.assessment.service';

@Injectable({
  providedIn: 'root'
})
export class AssessmentTypeResolverService implements Resolve<AssessmentTypeResolver> {
  constructor(private commonAssessmentServices: CommonAssessmentService) { }
  // ---------- working ------------------
  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AssessmentTypeResolver> {
  //   // const assessmentTypeList = this.commonAssessmentServices.getAssessmentTypesLOV();
  //   // console.log('assessmentType ', assessmentTypeList);
  //   return this.commonAssessmentServices.getAssessmentTypesLOV()
  //               .pipe(
  //                 map(data => ({assessmentType: data})),
  //                 catchError(error => {
  //                   const message = `Retrieval Error:  ${error}`;
  //                   console.error(message);
  //                   return of ({assessmentType: null, error: message});
  //                 })
  //               );
  // }
  // ---------- working ------------------
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AssessmentTypeResolver> {
    // const assessmentTypeList = this.commonAssessmentServices.getAssessmentTypesLOV();
    // console.log('assessmentType ', assessmentTypeList);
    return this.commonAssessmentServices.getAssessmentTypesLOV()
                .pipe(
                  map(data => ({response: data})),
                  catchError(error => {
                    const message = `Retrieval Error:  ${error}`;
                    console.error(message);
                    return of ({response: null, error: message});
                  })
                );
  }
}
