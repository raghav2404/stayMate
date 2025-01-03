import {InjectionToken} from '@angular/core';
import {AppConfig} from './appconfig.interface';

export const APP_SERVICE_CONFIG = new InjectionToken<AppConfig>('app.config');
export  const  APP_CONFIG : AppConfig= {
  apiEndpoint: 'http://localhost:8080',
}

