import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisCompComponent } from './vis-comp.component';

describe('VisCompComponent', () => {
  let component: VisCompComponent;
  let fixture: ComponentFixture<VisCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
