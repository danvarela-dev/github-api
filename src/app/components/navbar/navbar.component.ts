import { Component, OnInit } from '@angular/core';
import { SearchResponse } from 'src/app/common/interfaces/search-response.interface';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private userService: UserService, private profileService : ProfileService) {}

  topResults: any[] = [];
  userQuery:any;
  
  ngOnInit(): void {}
  
  search(username:string) {
    if (username != '') {
      this.userService
        .queryUser(username)
        .subscribe(
          (data) => (this.topResults = (data as SearchResponse).items)
        );
    }else{
      this.topResults = [];
    }
  }

  chooseUser(e:any){
    let username = e.target.innerText;
    let index = this.topResults.findIndex(res=> res.login == username );
    this.userQuery = this.topResults[index]; 
    this.topResults = [];
  }
  
}
