import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gymtrainer',
  templateUrl: './gymtrainer.component.html',
  styleUrls: ['./gymtrainer.component.css']
})
export class GymtrainerComponent extends BaseCtl{

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute){
    super(locator.endpoints.GYMTRAINER, locator, route);
  }

}
