import { Component, OnInit } from '@angular/core';
import { SearchResponse } from 'src/app/common/interfaces/search-response.interface';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private userService: UserService) {}

  topResults: any[] = [];

  ngOnInit(): void {}

  search(username: string) {
    if (username != '')
      this.userService
        .getUser(username)
        .subscribe(
          (data) => (this.topResults = (data as SearchResponse).items)
        );

    console.log(this.topResults);
  }
}
