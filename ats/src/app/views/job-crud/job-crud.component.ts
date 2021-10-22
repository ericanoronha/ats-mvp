import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-crud',
  templateUrl: './job-crud.component.html',
  styleUrls: ['./job-crud.component.css']
})
export class JobCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routeUrl: ''
    }
    headerService.headerData = {
      title: 'Vagas',
      icon: 'assignment_turned_in',
      routeUrl: '/jobs'
    }
  }

  ngOnInit(): void {
  }

  navigateToJobCreate(): void {
    this.router.navigate(['/jobs/create'])
  }

}
