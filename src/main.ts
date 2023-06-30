import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

//platformBrowser: para navegadores, puede ser para otras plataformas o dispositivos
platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
