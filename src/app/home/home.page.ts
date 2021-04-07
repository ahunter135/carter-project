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

  login(email, password) {
    /*
    Do login logic here, then move on
    */
    //Check is email is email
    let valid = false;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(email).toLowerCase()) &&  password.length >= 6) {
      valid = true;
    }  else {
      alert("Bad boy.");
    }
    //Validate password is 6 or more characters
    // POST DATA HERE 

    // Got a success, move on now
    if(valid) {
      this.router.navigateByUrl("welcome");
    }
  }
}
