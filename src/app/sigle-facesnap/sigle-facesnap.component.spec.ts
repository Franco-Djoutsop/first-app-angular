import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigleFacesnapComponent } from './sigle-facesnap.component';

describe('SigleFacesnapComponent', () => {
  let component: SigleFacesnapComponent;
  let fixture: ComponentFixture<SigleFacesnapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigleFacesnapComponent]
    });
    fixture = TestBed.createComponent(SigleFacesnapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
