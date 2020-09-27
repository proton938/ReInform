import { Component } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'ReInform';
  cookieValue = '';

  constructor(private cookie: CookieService) {
  }

  public cookeWork(): void {
    this.cookie.set('cookie', '888' );
    this.cookieValue = this.cookie.get('cookie');
    alert(this.cookieValue);
  }

}
