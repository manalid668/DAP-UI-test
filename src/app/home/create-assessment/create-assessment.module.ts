import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AssessmentTypeResolverService } from './assessment-type-resolver-service';
import { AssessmentCreateDetailsComponent } from './components/assessment-create-details/assessment-create-details.component';
import { AssessmentStepperComponent } from './components/assessment-stepper/assessment-stepper.component';
import { ClientSetDetailsComponent } from './components/client-set-details/client-set-details.component';
import { OfficeSetDetailsComponent } from './components/office-set-details/office-set-details.component';
import { CreateAssessmentComponent } from './create-assessment.component';

const routes: Routes = [
  { path: '', component: CreateAssessmentComponent,
          children: [
            { path: '',
              component: AssessmentCreateDetailsComponent,
              resolve: {resolvedAssessmentType: AssessmentTypeResolverService}
            },
            { path: 'client', component: ClientSetDetailsComponent},
            { path: 'office', component: OfficeSetDetailsComponent}
          ]},
  { path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [CreateAssessmentComponent, AssessmentStepperComponent, AssessmentCreateDetailsComponent,
    ClientSetDetailsComponent, OfficeSetDetailsComponent],
  imports: [
    CommonModule,
    BsDatepickerModule.forRoot(),
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class CreateAssessmentModule { }
