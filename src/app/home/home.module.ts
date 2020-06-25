import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfilePipe } from '../../app/Pipes/user-profile.pipe';
import { CommonAssessmentService } from '../providers/common.assessment.service';
// import { ClientListComponent } from './client-list/client-list.component';
import { AssessmentSelectionComponent } from './components/assessment-selection/assessment-selection.component';
import { ClientInputDetailsComponent } from './components/client-input-details/client-input-details.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { OfficeInputDetailsComponent } from './components/office-input-details/office-input-details.component';
import { HomeComponent } from './home.component';




const routes: Routes = [
  { path: '', component: HomeComponent,
          children: [
            { path: '', component: ClientListComponent},
            {path: 'assessTypeList', component: AssessmentSelectionComponent},
            {path: 'clientDetails', component: ClientInputDetailsComponent},
            {path: 'officeDetails', component: OfficeInputDetailsComponent},
            {path: 'createAssessment', loadChildren: () =>
            import('./create-assessment/create-assessment.module').then(m => m.CreateAssessmentModule) },
          ]},
  { path: '**', redirectTo: ''}
];
@NgModule({
  declarations: [
    ClientListComponent,
    MenuHeaderComponent,
    HomeComponent,
    AssessmentSelectionComponent,
    ClientInputDetailsComponent,
    OfficeInputDetailsComponent,
    UserProfilePipe
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [CommonAssessmentService]
})
export class HomeModule { }
