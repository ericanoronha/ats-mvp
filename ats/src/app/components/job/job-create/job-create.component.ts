import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Job } from "../job.model";
import { JobService } from "./../job.service";

@Component({
  selector: "app-job-create",
  templateUrl: "./job-create.component.html",
  styleUrls: ["./job-create.component.css"],
})
export class JobCreateComponent implements OnInit {
  job: Job = {
    title: "",
    skills: "",
    experience: "",
    date: "",
    status: false
  };

  constructor(private jobService: JobService, private router: Router) {}

  ngOnInit(): void {}

  createJob(): void {
    this.jobService.create(this.job).subscribe(() => {
      this.jobService.showMessage("Vaga criada com sucesso");
      this.router.navigate(["/jobs"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/jobs"]);
  }
}
