import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-systemeven-listt',
  templateUrl: './systemeven-listt.component.html',
  styleUrls: ['./systemeven-listt.component.css']
})
export class SystemevenListtComponent extends BaseListCtl {

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute){
    super(locator.endpoints.SYSTEMEVENT, locator, route)
  }

}
