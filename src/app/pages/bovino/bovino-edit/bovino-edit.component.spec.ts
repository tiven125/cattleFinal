import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BovinoEditComponent } from './bovino-edit.component';

describe('BovinoEditComponent', () => {
  let component: BovinoEditComponent;
  let fixture: ComponentFixture<BovinoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BovinoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BovinoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
