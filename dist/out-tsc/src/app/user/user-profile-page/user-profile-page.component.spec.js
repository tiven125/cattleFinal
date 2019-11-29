import { async, TestBed } from '@angular/core/testing';
import { UserProfilePageComponent } from './user-profile-page.component';
describe('UserProfilePageComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserProfilePageComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(UserProfilePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=user-profile-page.component.spec.js.map