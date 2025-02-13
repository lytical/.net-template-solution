import { ComponentFixture, TestBed } from '@angular/core/testing';

import { page_header_component } from './header.component';

describe('HeaderComponent', () => {
  let component: page_header_component;
  let fixture: ComponentFixture<page_header_component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [page_header_component]
    });
    fixture = TestBed.createComponent(page_header_component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
