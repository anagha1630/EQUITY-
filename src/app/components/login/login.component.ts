
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container-fluid login-container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <div class="card login-card mt-5">
            <div class="card-header text-center">
              <div class="app-logo">
                <div class="logo-icon">
                  <span class="balance-icon">⚖️</span>
                </div>
                <h2>EquiHub</h2>
              </div>
            </div>
            <div class="card-body">
              <form (ngSubmit)="login()">
                <div class="mb-3">
                  <label for="username" class="form-label">Username</label>
                  <input type="text" class="form-control" id="username" name="username" [(ngModel)]="username" required>
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input type="password" class="form-control" id="password" name="password" [(ngModel)]="password" required>
                </div>
                <div class="d-grid gap-2">
                  <button type="submit" class="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .login-container {
      height: 100vh;
      display: flex;
      align-items: center;
      background-color: #f5f5f5;
    }
    .login-card {
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
    .app-logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
    }
    .logo-icon {
      width: 60px;
      height: 60px;
      background-color: #5a9;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
    }
    .balance-icon {
      font-size: 30px;
    }
  `]
})
export class LoginComponent {
  username: string = '';
  password: string = '';
 
  constructor(private router: Router) {}
 
  login() {
    // In a real app, you would validate credentials against an API
    // For now, we'll just navigate to the RSU page for any input
    if (this.username && this.password) {
      this.router.navigate(['/rsu']);
    }
  }
}

