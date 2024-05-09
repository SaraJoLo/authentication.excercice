import { Injectable, inject } from '@angular/core';
import { User } from '../shared/interfaces/user';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users!:User[];
  http=inject(HttpClient)

  
}
