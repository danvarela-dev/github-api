import { Component, Input, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  @Input() userQuery: any;
  userObj: any;
  followers: any;
  following: any;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.getUserObj();
  }

  getUserObj() {
    this.profileService.getUser(this.userQuery.url).subscribe((response) => {
      this.userObj = response;
      this.getFollow();
    });
  }
  getFollow() {
    let fixedFollowingUrl = this.fixFollowersUrl((this.userObj.following_url as string));

    let followResponse = this.profileService.getFollowStats(
      this.userObj.followers_url,
      fixedFollowingUrl
    );

  }

  private fixFollowersUrl(url:string){
    let end = url.indexOf('{');
    let fixedUrl = url.substring(0 , end );
    return fixedUrl;
  }
}
