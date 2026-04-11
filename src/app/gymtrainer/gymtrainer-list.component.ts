import { Component } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gymtrainer-list',
  templateUrl: './gymtrainer-list.component.html',
  styleUrls: ['./gymtrainer-list.component.css']
})
export class GymtrainerListComponent extends BaseListCtl{

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute){
      super(locator.endpoints.GYMTRAINER, locator, route);
    }

}
