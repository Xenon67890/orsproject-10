import { Component } from '@angular/core';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';

@Component({
  selector: 'app-systemevent',
  templateUrl: './systemevent.component.html',
  styleUrls: ['./systemevent.component.css']
})
export class SystemeventComponent extends BaseCtl{

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute){
    super(locator.endpoints.SYSTEMEVENT, locator, route);
  }

}
