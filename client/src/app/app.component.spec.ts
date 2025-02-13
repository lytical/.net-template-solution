import { TestBed } from '@angular/core/testing';
import { app_component } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [app_component]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(app_component);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'client'`, () => {
    const fixture = TestBed.createComponent(app_component);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('client');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(app_component);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('client app is running!');
  });
});
