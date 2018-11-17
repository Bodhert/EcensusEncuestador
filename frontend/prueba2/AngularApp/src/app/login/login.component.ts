import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { isError } from 'util';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }


  ngOnInit() {
  }



  onLogin(form: NgForm) {
    if (form.valid) {
    }
  }
}
