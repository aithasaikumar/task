import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  constructor(public userService: UserService, public router: Router) { }
  allUsersData = [];
  reposData = []
  login: string

  ngOnInit() {
    this.userService.getAllUsers().subscribe(x => {
      this.allUsersData = x
      console.log(this.allUsersData);
    })
  }

  viewRepos(userName) {
    this.userService.getReposDetails(userName).subscribe(x => {
      this.reposData = x
      console.log(this.reposData)
    })
  }


  Search() {
    if (this.login != "") {
      this.allUsersData = this.allUsersData.filter(res => {
        console.log(res.login)
        return res.login.toLocaleLowerCase().match(this.login.toLocaleLowerCase())
      })
    } else if (this.login == "") {
      this.ngOnInit();
    }
  }
}
