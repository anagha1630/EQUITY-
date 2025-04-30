import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
templateUrl: './header.component.html',
  styles: [`
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 30px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .rsu-header {
      background-color: #e6f0f9;
    }
    .esop-header {
      background-color: #e6f9e6;
    }
    .vest-header {
      background-color: #e6f9f0;
    }
    .page-title h1 {
      margin: 0;
      color: #2c3e50;
      font-size: 24px;
      font-weight: bold;
    }
    .user-info {
      display: flex;
      align-items: center;
    }
    .stock-price {
      margin-right: 20px;
      font-size: 14px;
    }
    .price {
      color: #008000;
      font-weight: bold;
    }
    .discounted-price {
      margin-left: 15px;
      color: #2c3e50;
    }
    .profile {
      display: flex;
      align-items: center;
    }
    .user-name {
      margin-right: 10px;
    }
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      background-color: #e0e0e0;
    }
    .avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `]
})
export class HeaderComponent {
  @Input() pageTitle: string = '';
  @Input() pageType: string = '';
  @Input() stockPrice: number = 0;
  @Input() discountedPrice: number | null = null;
  @Input() showStockPrice: boolean = true;
}