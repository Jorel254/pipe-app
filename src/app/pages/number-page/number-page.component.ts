import { Component, signal } from '@angular/core';
import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
@Component({
  selector: 'app-number-page',
  imports: [DecimalPipe, CurrencyPipe, PercentPipe],
  templateUrl: './number-page.component.html',
  styleUrl: './number-page.component.css',
})
export class NumberPageComponent {
  totalVentas = signal(2567789.565645);
  porcentaje = signal(0.4856);
}
