import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mystic-realm';

  public inputString = "";


  public calculatePath() {

    console.log(this.inputString);
  }
}
