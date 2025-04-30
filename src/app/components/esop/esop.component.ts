import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
 
@Component({
  selector: 'app-esop',
  standalone: true,
  imports: [CommonModule, SidebarComponent, HeaderComponent],
  templateUrl: './esop.component.html',
  styleUrls: ['./esop.component.css']
})
export class EsopComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
 