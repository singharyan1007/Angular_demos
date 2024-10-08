import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactModifyComponent } from './contact-modify.component';

describe('ContactModifyComponent', () => {
  let component: ContactModifyComponent;
  let fixture: ComponentFixture<ContactModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactModifyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
