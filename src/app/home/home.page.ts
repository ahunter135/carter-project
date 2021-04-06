import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }

  changeMyName(email, password) {
    /*
    Do login logic here, then move on
    */
    //Check is email is email

    //Validate password is 6 or more characters

    // POST DATA HERE 

    // Got a success, move on now
    this.router.navigateByUrl("welcome");
  }
}
