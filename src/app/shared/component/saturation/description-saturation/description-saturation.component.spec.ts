import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionSaturationComponent } from './description-saturation.component';

describe('DescriptionSaturationComponent', () => {
  let component: DescriptionSaturationComponent;
  let fixture: ComponentFixture<DescriptionSaturationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionSaturationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionSaturationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
