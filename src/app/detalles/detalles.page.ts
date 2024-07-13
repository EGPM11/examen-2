import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage {
  event: any;

  constructor(private route: ActivatedRoute) {}

  ionViewWillEnter() {
    this.route.queryParams.subscribe(params => {
      this.event = JSON.parse(params['event']);
    });
  }
}
