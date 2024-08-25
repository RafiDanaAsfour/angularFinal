import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly users = [
    { email: 'ddanarafi@gmail.com', password: 'Dana123' },
    { email: 'user2@example.com', password: 'Password2' },

  ];
  private loggedIn = false;

  constructor() { }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  login(email: string, password: string): Observable<boolean> {
    return of({ email, password }).pipe(
      delay(1000),
      map(credentials => {
        const user = this.users.find(u => u.email === credentials.email && u.password === credentials.password);
        if (user) {
          this.loggedIn = true;
          return true;
        } else {
          this.loggedIn = false;
          alert("SomeThink ERROR!");
          return false;
        }
      })
    );
  }


}
