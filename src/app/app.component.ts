import { Component } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'ReInform';
  cookieValue = '';

  constructor(private cookie: CookieService, private router: Router) {
  }

  public cookeWork(): void {
    this.cookie.set('cookie', '888' );
    this.cookieValue = this.cookie.get('cookie');
    alert(this.cookieValue);
  }

  removeLocalstrage() {
    localStorage.removeItem('docs');
    this.router.navigate(['']);
  }

}
