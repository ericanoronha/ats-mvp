import { Job } from "./../job.model";
import { ActivatedRoute, Router } from "@angular/router";
import { JobService } from "./../job.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-job-update',
  templateUrl: './job-update.component.html',
  styleUrls: ['./job-update.component.css']
})
export class JobUpdateComponent implements OnInit {

  job: Job;

  constructor(
    private jobService: JobService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.jobService.readById(id).subscribe((job) => {
      this.job = job;
    });
  }

  updateJob() {
    this.jobService.update(this.job).subscribe(() => {
      this.jobService.showMessage("Vaga atualizada com sucesso");
      this.router.navigate(["/jobs"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/jobs"]);
  }

}
