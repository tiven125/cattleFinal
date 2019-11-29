import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BovinoListComponent } from './bovino-list.component';

describe('BovinoListComponent', () => {
  let component: BovinoListComponent;
  let fixture: ComponentFixture<BovinoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BovinoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BovinoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
