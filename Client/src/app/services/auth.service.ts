import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn = new BehaviorSubject<boolean>(false);
  private userObject = new BehaviorSubject<any>(null);

  public readonly isLoggedIn$: Observable<boolean> = this.isLoggedIn.asObservable();
  public readonly userObject$: Observable<any> = this.userObject.asObservable();

  private token: string | null = null;

  constructor(private http: HttpClient, private router: Router) {
    this.checkInitialLoginStatus();
  }

  public get isLoggedInValue(): boolean {
    return this.isLoggedIn.getValue();
  }

  public set isLoggedInValue(value: boolean) {
    this.isLoggedIn.next(value);
  }

  public get userObjectValue(): any {
    return this.userObject.getValue();
  }

  public set userObjectValue(user: any) {
    this.userObject.next(user);
  }

  public login(email: string, password: string) {
    this.http.post<{ success: boolean, token: string }>('http://localhost:3000/auth/login', {
      email,
      password
    }, { withCredentials: true }).subscribe({
      next: (response) => {
        if (response.success) {
          this.setToken(response.token);
          this.fetchProfile();
          this.router.navigate(['/']);
        }
      },
      error: (error) => {
        console.error('Login failed', error);
      }
    });
  }

  private fetchProfile() {
    this.http.get<{ success: boolean, user: any }>('http://localhost:3000/auth/profile', { withCredentials: true }).subscribe({
      next: (data) => {
        if(data.success){
          this.userObjectValue = data.user;
          this.isLoggedInValue = true;
        }else{
          this.router.navigate(['/login']);
        }
      },
      error: (error) => {
        console.error('Failed to fetch profile', error);
        this.logout();
      }
    });
  }

  public logout() {
    this.http.post('http://localhost:3000/auth/logout', {}, { withCredentials: true }).subscribe({
      next: () => {
        this.token = null;
        localStorage.removeItem('token');
        this.userObjectValue = null;
        this.isLoggedInValue = false;
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Logout failed', error);
      }
    });
  }

  private checkInitialLoginStatus() {
    this.getToken();
    if (this.token) {
      this.fetchProfile();
    }
  }

  public getToken(): string | null {
    this.token = localStorage.getItem('token');
    return this.token;
  }

  private setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', this.token);
  }
}
