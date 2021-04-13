import { Component, OnInit } from '@angular/core';
import { AddComponent } from '../modals/add/add.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  add() {
    /**
     * Create and present a Modal here. Check docs.
     * 
     * For Component, use the above "AddComponent"
     */
  }

  
}
