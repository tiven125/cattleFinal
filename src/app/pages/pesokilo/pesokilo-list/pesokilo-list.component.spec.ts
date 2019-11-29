import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesokiloListComponent } from './pesokilo-list.component';

describe('PesokiloListComponent', () => {
  let component: PesokiloListComponent;
  let fixture: ComponentFixture<PesokiloListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesokiloListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesokiloListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
