import { Component, OnInit } from '@angular/core';
import { Clients } from 'src/app/models/clients';
import { CommonAssessmentService } from 'src/app/providers/common.assessment.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  public clientList: Clients[];

  constructor(private commonAssessmentService: CommonAssessmentService) {
    this.clientList = [];
   }

  ngOnInit(): void {
    this.initialPageLoad();
  }

  public initialPageLoad() {
      this.commonAssessmentService.getClientsDetails()
                .subscribe(data => {
                  if (data && data.status === 'success' && data.message) {
                    this.clientList = data.message;
                    console.log('len of client list ', this.clientList.length);
                  }
                });
  }

}
