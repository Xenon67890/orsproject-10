import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute){
    super(locator.endpoints.RESULT, locator, route);
  }

}
