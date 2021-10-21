import { ActivatedRoute, Router } from "@angular/router";
import { JobService } from "./../job.service";
import { Job } from "./../job.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-job-delete",
  templateUrl: "./job-delete.component.html",
  styleUrls: ["./job-delete.component.css"],
})
export class JobDeleteComponent implements OnInit {
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

  deleteJob(): void {
    this.jobService.delete(this.job.id).subscribe(() => {
      this.jobService.showMessage("Vaga excluída com sucesso");
      this.router.navigate(["/jobs"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/jobs"]);
  }
}
