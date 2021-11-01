import { Component, Input, OnInit } from '@angular/core';
import { Helpers } from 'src/app/common/helpers/helpers';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { ReposService } from 'src/app/services/repos/repos.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  @Input() userQuery: any;
  userObj: any;
  followers: any;
  followersProfiles: any[] = [];

  reposUrl: string = '';
  reposCount: number = 0;
  reposList: any;

  starsNumber: number = 0;

  constructor(
    private profileService: ProfileService,
    private repoService: ReposService
  ) {}

  ngOnInit() {
    this.initUserObj();
  }

  initUserObj() {
    this.profileService.getUser(this.userQuery.url).subscribe((response) => {
      this.userObj = response;
      this.reposUrl = this.userObj.repos_url;

      this.initStars();
      this.initRepos();
      this.initFollowers();
    });
  }
  initStars() {
    this.getStars(this.userObj.starred_url).subscribe((response) => {
      let link = response.headers.get('Link');
      this.starsNumber = Helpers.getCountfromHeader(link);
    });
  }

  initFollowers() {
    this.getFollowers(this.userObj.followers_url).subscribe((response) => {
      this.followers = response;

      (this.followers as Array<any>).forEach((element) => {
        this.profileService.getUser(element.url).subscribe((response) => {
          this.followersProfiles.push(response);
        });
      });
    });
  }

  getStars(url: string) {
    return this.profileService.getStarsCount(Helpers.fixUrl(url));
  }

  initRepos() {
    this.getReposCount().subscribe((response) => {
      let link = response.headers.get('Link');
      this.reposCount = Helpers.getCountfromHeader(link);
    });

    this.getRepos().subscribe((response) => {
      this.reposList = response;
    });
  }

  getReposCount() {
    return this.repoService.getRepoCount(this.reposUrl);
  }

  getRepos() {
    return this.repoService.getRepos(this.reposUrl);
  }

  getFollowers(url: string) {
    return this.profileService.getFollowers(url);
  }
}
