import { ComponentFixture, TestBed } from '@angular/core/testing';

import { page_home_component } from './home.component';

describe('HomeComponent', () => {
  let component: page_home_component;
  let fixture: ComponentFixture<page_home_component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [page_home_component]
    });
    fixture = TestBed.createComponent(page_home_component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
