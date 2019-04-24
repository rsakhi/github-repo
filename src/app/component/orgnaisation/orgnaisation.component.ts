import { Component, OnInit } from '@angular/core';
import { OrganisationDetailsService } from 'src/app/services/organisation-details.service';

@Component({
  selector: 'app-orgnaisation',
  templateUrl: './orgnaisation.component.html',
  styleUrls: ['./orgnaisation.component.scss']
})
export class OrgnaisationComponent implements OnInit {

  members:any = []
  p: number = 1;
  constructor( private organizationsService: OrganisationDetailsService) { }

  ngOnInit() {
    this.organizationsService.getMembersDetails().subscribe(res => {
      debugger
      this.members = res;
    })
  }
}
