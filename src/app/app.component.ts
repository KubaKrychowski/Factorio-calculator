import { Component } from '@angular/core';
import { AppService } from './core/app-service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Factiorio-caclculator';

  public get isLoading(): boolean {
    return this.appService.loading;
  }

  constructor(private appService: AppService) {

  }
}
