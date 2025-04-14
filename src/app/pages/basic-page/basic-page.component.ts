import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-basic-page',
  imports: [CommonModule],
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css',
})
export class BasicPageComponent {
  nameLower = signal('Sergio');
  nameUpper = signal('SERGIO');
  fullName = signal('SERgio HerrERA');
}
