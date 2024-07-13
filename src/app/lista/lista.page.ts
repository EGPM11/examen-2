import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

interface Event {
  date: string;
  title: string;
  description: string;
  photo: string;
}

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  events: Event[] = [];

  constructor(private storage: Storage, private router: Router) {}

  async ngOnInit() {
    await this.storage.create();  // Inicializar el storage
    this.events = (await this.storage.get('events')) || [];
  }

  async ionViewWillEnter() {
    this.events = (await this.storage.get('events')) || [];
  }

  viewEvent(event: Event) {
    this.router.navigate(['/detalles'], { queryParams: { event: JSON.stringify(event) } });
  }
}
