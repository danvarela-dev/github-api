import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AlertsService {

  constructor(private toastr:ToastrService) { }

  success(msg:string){
    this.toastr.success(msg, "Success");
  }

  error(msg:string){
    this.toastr.error(msg, "Error");
  }

}
