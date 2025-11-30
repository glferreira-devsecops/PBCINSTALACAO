import { bootstrapApplication } from '@angular/platform-browser';
// FIX: 'provideExperimentalZonelessChangeDetection' is deprecated and has been renamed to 'provideZonelessChangeDetection'.
import { provideZonelessChangeDetection } from '@angular/core';
import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
  ]
}).catch((err) => console.error(err));