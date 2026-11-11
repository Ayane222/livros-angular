import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="navbar-nav">
        <a class="nav-item nav-link" routerLink="/lista" routerLinkActive="active">Catálogo</a>
        <a class="nav-item nav-link" routerLink="/dados" routerLinkActive="active">Novo</a>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'livros-angular';
}



