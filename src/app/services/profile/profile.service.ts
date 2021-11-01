import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from '../data/data.service';

@Injectable()
export class ProfileService extends DataService {
  constructor(http: HttpClient) {
    super(http);
  }

  getUser(url: string) {
    return this.getAll(url);
  }

  getFollowers(followersUrl: string) {
    return  this.getAll(followersUrl);
  }

  getStarsCount(url:string){
    return this.getCount(url);
  }



}