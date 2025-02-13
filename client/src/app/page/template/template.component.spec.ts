import { ComponentFixture, TestBed } from '@angular/core/testing';

import { page_template_component } from './template.component';

describe('TemplateComponent', () => {
  let component: page_template_component;
  let fixture: ComponentFixture<page_template_component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [page_template_component]
    });
    fixture = TestBed.createComponent(page_template_component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
