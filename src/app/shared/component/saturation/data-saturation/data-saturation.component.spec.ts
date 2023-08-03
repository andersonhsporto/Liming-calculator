import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSaturationComponent } from './data-saturation.component';

describe('DataSaturationComponent', () => {
  let component: DataSaturationComponent;
  let fixture: ComponentFixture<DataSaturationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataSaturationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataSaturationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
