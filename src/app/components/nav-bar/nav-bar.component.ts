import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  rutas = routes.map(({ title, path }) => {
    return {
      title: title ?? '',
      path: path ?? '',
    };
  }).filter(ruta => ruta.path !== '**');
}
