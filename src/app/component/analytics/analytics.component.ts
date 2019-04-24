import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

  repoDetails:any = [];
  p: number = 1;
  constructor(private analyticsService :AnalyticsService) { }

  ngOnInit() {
    this.analyticsService.getRepos().subscribe(res => {
      this.repoDetails = res;
    })
  }

}
