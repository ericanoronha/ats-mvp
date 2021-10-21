import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDeleteComponent } from './job-delete.component';

describe('JobDeleteComponent', () => {
  let component: JobDeleteComponent;
  let fixture: ComponentFixture<JobDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente de exclusão de vaga', () => {
    expect(component).toBeTruthy();
  });
});
