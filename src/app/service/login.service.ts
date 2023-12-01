import { Injectable } from '@angular/core';
import { Login } from '../models/login.model';
@Injectable({
providedIn: 'root'
})

    export class LoginService {
        login: Login[] = []
        }