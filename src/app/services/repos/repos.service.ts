import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})
export class ReposService  extends DataService{
  reposUrl:string = '';
  constructor(http:HttpClient) {
    super(http);
   }

   getRepoCount(url:string){
    return this.getCount(url);
  }

  getRepos(url:string){
    return this.getAll(url);
  }
}
