import { Component, OnInit } from '@angular/core';
import { SearchResponse } from 'src/app/common/interfaces/search-response.interface';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private userService: UserService,private toastr:AlertsService) {}

  topResults: any[] = [];
  userQuery: any;

  ngOnInit(): void {}

  search(username: string) {
    this.userQuery = undefined;
    if (username != '') {
      this.userService
        .queryUser(username)
        .subscribe(
          (data) => {(this.topResults = (data as SearchResponse).items)
            if(this.topResults.length == 0){
              this.toastr.error('User not found...')    
            }
          },(error:Response)=>{
            if(error.status == 403){
              this.toastr.error('Forbidden Access: Exceeded quota limit.')
            }
          }
        );
    } else {
      this.topResults = [];
    }
  }

  chooseUser(e: any) {
    this.userQuery = {};
    let username = e.target.innerText;
    e.target.innerText = '';
    let index = this.topResults.findIndex((res) => res.login == username);
    this.userQuery = this.topResults[index];
    this.topResults = [];
  }
}
