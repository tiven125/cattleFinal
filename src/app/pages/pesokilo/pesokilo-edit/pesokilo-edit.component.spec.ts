import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesokiloEditComponent } from './pesokilo-edit.component';

describe('PesokiloEditComponent', () => {
  let component: PesokiloEditComponent;
  let fixture: ComponentFixture<PesokiloEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesokiloEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesokiloEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
