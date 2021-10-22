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
    this.getJobs();
  }

  getJobs(){
    this.jobService.read().subscribe(jobs => {
      this.jobs = jobs
      console.log(jobs)
    })
  }

  updateStatus(job: Job) {
    const jobStatus: Job = {
      status: !job.status,
      id: job.id
    }
    this.jobService.updateStatus(jobStatus).subscribe(() => {
      this.getJobs();
      this.jobService.showMessage("Status da vaga atualizada com sucesso");
    });
  }

}

