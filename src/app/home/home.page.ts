import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private router: Router, private httpService: HttpService) { }

  ngOnInit() {
  }

  async login(email, password) {
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

/**
 * Notes:
 * 
 * You do not need a do/while loop. Delete that.
 * 
 * You missed a catch, what if the user did not type a email or a password? I get an error if I hit login without typing anything.
 * 
 * You can see errors by opening your dev tools in the browser tab that we are running in. Just google how to open dev tools. Typically you can just right click the page and 
 * choose "Inspect Element" and navigate to console.
 * 
 */
