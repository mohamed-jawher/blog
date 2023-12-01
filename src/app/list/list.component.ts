import { Component,OnInit } from '@angular/core';
import { Login } from '../models/login.model';
import { LoginService } from '../service/login.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  login !: Login[];
  ngOnInit(): void {
    this.login = this.loginService.login;
    
  }
  constructor(private loginService: LoginService) { }
  }
