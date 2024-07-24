import { provideZone } from '@angular/core';

// Remove the following imports and configuration:
// import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { routes } from './app.routes';

// appConfig is not needed anymore for routing setup

// Define any other configurations or providers you need here
export const appConfig = {
  providers: [
    provideZone({ eventCoalescing: true })
    // Add more providers as needed
  ]
};