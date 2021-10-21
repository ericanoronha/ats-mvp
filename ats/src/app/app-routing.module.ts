import { JobDeleteComponent, JobUpdateComponent, JobCreateComponent } from './components';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { JobCrudComponent } from "./views/job-crud/job-crud.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "jobs",
    component: JobCrudComponent,
  },
  {
    path: "jobs/create",
    component: JobCreateComponent,
  },
  {
    path: "jobs/update/:id",
    component: JobUpdateComponent,
  },
  {
    path: "jobs/delete/:id",
    component: JobDeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
