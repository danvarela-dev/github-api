import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';

@Injectable()
export class ProfileService extends DataService {
  constructor(http: HttpClient) {
    super(http);
  }

  getUser(url: string) {
    return this.getAll(url);
  }

  getFollowStats(followersUrl: string, followingUrl: string) {
    return {
      followers: this.getAll(followersUrl),
      following: this.getAll(followingUrl),
    };
  }
}
