import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuppySearchComponent } from './puppy-search.component';

describe('PuppySearchComponent', () => {
  let component: PuppySearchComponent;
  let fixture: ComponentFixture<PuppySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuppySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuppySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
