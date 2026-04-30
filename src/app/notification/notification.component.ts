import { Component } from '@angular/core';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute){
    super(locator.endpoints.NOTIFICATION, locator, route);
  }

}
