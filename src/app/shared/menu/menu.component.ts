import { Component } from '@angular/core';

interface MenuItem {
  ruta: string;
  texto: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      li{
        cursor: pointer
      }
    `
  ]
})
export class MenuComponent {

  menuItems: MenuItem[] = [
    { ruta: '/graficas/barras', texto: 'Barras' },
    { ruta: '/graficas/barras-doble', texto: 'Barras dobles' },
    { ruta: '/graficas/circular', texto: 'Circular' },
    { ruta: '/graficas/circular-http', texto: 'Circular Http' }
  ]
}
