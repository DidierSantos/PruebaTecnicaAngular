import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogReadComponent } from './dialog-read.component';

describe('DialogReadComponent', () => {
  let component: DialogReadComponent;
  let fixture: ComponentFixture<DialogReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
