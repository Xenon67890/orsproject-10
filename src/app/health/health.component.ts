import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent extends BaseCtl{

constructor(public locator: ServiceLocatorService, route:ActivatedRoute){
  super(locator.endpoints.HEALTH, locator, route);
}

}
