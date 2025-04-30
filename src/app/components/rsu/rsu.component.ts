import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
 
@Component({
  selector: 'app-rsu',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './rsu.component.html',
  styleUrls: ['./rsu.component.css']
})
export class RsuComponent implements OnInit {
  constructor() {}
 
  ngOnInit(): void {}
 
  downloadPdf(): void {
    const link = document.createElement('a');
    link.href = 'assets/documents/grant agreements.pdf';
link.download = 'assets/documents/grant agreements.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
link.click();
    document.body.removeChild(link);
  }
}