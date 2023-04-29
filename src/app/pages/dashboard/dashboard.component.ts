import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";
import { UsersService } from 'src/app/services/users.service';
import { TitlesService } from 'src/app/services/titles.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboardData = {
    users: 0,
    capstone_titles: 0,
    faculty: 0,
    coordinators: 0
  }
  constructor(private usersService: UsersService, private titlesService: TitlesService) {

  }
  ngOnInit() {
    this.usersService.getAll().subscribe(
      response => {
        this.dashboardData.users = response.length
      }
    )

    this.usersService.getAllFaculty().subscribe(
      response => {
        this.dashboardData.faculty = response.length
      }
    )

    this.titlesService.getAll().subscribe(
      response => {
        for (let data of response) {
          this.dashboardData.capstone_titles = JSON.parse(data.titles).length
        }
      }
    )

    this.usersService.getAll().subscribe(
      response => {
        for (let data of response) {
          if (data.user_type === 'capstone_coordinator') {
            this.dashboardData.coordinators += 1
          }
        }
      }
    )
  }


}
