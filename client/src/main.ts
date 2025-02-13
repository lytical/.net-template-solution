import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { app_module } from './app/app.module';

platformBrowserDynamic().bootstrapModule(app_module)
  .catch(err => console.error(err));
