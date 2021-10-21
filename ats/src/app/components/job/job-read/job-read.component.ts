import { JobService } from './../job.service';
import { Job } from './../job.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-read',
  templateUrl: './job-read.component.html',
  styleUrls: ['./job-read.component.css']
})
export class JobReadComponent implements OnInit {

  jobs: Job[]

  displayedColumns = ['id', 'title', 'skills', 'experience', 'date', 'status', 'action']

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.jobService.read().subscribe(jobs => {
      this.jobs = jobs
      console.log(jobs)
    })
  }

}

