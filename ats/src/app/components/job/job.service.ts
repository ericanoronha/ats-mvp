import { catchError, map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { EMPTY, Observable } from "rxjs";
import { Job } from './job.model';

@Injectable({
  providedIn: "root",
})
export class JobService {
  baseUrl = "http://localhost:3001/jobs";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "x", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(job: Job): Observable<Job> {
    return this.http.post<Job>(this.baseUrl, job).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Job[]> {
    return this.http.get<Job[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Job[]> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Job[]>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(job: Job): Observable<Job> {
    const url = `${this.baseUrl}/${job.id}`;
    return this.http.put<Job>(url, job).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Job> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Job>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    console.log(e);
    this.showMessage("Erro", true);
    return EMPTY;
  }
}
