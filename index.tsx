
import { bootstrapApplication } from '@angular/platform-browser';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { AppComponent } from './src/app.component';

// Define the application configuration.
const appConfig: ApplicationConfig = {
  providers: [
    // This is the essential provider for running a modern, zoneless Angular application.
    // It resolves the NG0908 error.
    provideZoneChangeDetection(),
  ],
};

// Bootstrap the root component with the defined configuration.
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error('Application bootstrap failed:', err));

// AI Studio always uses an `index.tsx` file for all project types.