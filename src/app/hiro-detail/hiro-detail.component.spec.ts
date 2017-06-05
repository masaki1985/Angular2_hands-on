import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiroDetailComponent } from './hiro-detail.component';

describe('HiroDetailComponent', () => {
  let component: HiroDetailComponent;
  let fixture: ComponentFixture<HiroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiroDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
