import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends DataService{

  constructor(http:HttpClient) { 
    super(http);
  }

  getUser(username:string){
    return this.getAll("https://api.github.com/search/users?q="+username);
  }


}
