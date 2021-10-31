import { ErrorHandler, Injectable } from '@angular/core';
import { AlertsService } from 'src/app/services/alerts/alerts.service';

@Injectable()
export class AppErrorHandler implements ErrorHandler {
  constructor(private alert: AlertsService) {}
  handleError(error: any) {
    this.alert.error('An unexpected error occurred.');
    console.log(error);
  }
}
