// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  login(email: string, password: string): boolean {
    // For now, accept any valid .mil email with a password
    // Later you can add real authentication logic
    const milEmailPattern = /^[^\s@]+@[^\s@]+\.mil$/i;
    if (milEmailPattern.test(email) && password) {
      this.isAuthenticated = true;
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', email);
      return true;
    }
    return false;
  }

  loginWithCAC(): void {
    // CAC login - bypass email/password validation
    this.isAuthenticated = true;
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', 'cac.user@military.mil');
    localStorage.setItem('loginMethod', 'CAC');
  }

  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('loginMethod');
  }

  isLoggedIn(): boolean {
    // Check localStorage to persist login across page refreshes
    const loggedIn = localStorage.getItem('isLoggedIn');
    this.isAuthenticated = loggedIn === 'true';
    return this.isAuthenticated;
  }

  getUserEmail(): string | null {
    return localStorage.getItem('userEmail');
  }
}