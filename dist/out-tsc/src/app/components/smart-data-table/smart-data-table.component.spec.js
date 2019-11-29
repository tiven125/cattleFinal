import { async, TestBed } from '@angular/core/testing';
import { SmartDataTableComponent } from './smart-data-table.component';
describe('SmartDataTableComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SmartDataTableComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(SmartDataTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=smart-data-table.component.spec.js.map