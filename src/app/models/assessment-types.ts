// export class AssessmentTypes {
//     public assessmenTypeId: string;
//     public assessmentTypeName: string;
//     public isSelected = false;
//   }
// export class AssessmentTypeResolver {
//   assessmentType: AssessmentTypes[];
//   error?: any;

import { Observable } from 'rxjs';

// }
export class AssessmentTypes {
  public assessmentID: number;
  public assessmentType: string;
  public assessmentdate: string;
  public isSelected: boolean;
}
export class AssessmentTypeResolver {
response: Observable<any>;
error?: any;
}
