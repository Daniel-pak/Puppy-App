import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuppyDetailComponent } from './puppy-detail.component';

describe('PuppyDetailComponent', () => {
  let component: PuppyDetailComponent;
  let fixture: ComponentFixture<PuppyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuppyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuppyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
