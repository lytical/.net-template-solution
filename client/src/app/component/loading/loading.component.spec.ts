import { ComponentFixture, TestBed } from '@angular/core/testing';

import { loading_component } from './loading.component';

describe('LoadingComponent', () => {
  let component: loading_component;
  let fixture: ComponentFixture<loading_component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [loading_component]
    });
    fixture = TestBed.createComponent(loading_component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
