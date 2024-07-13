import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  eventForm: FormGroup;

  constructor(private fb: FormBuilder, private storage: Storage) {
    this.eventForm = this.fb.group({
      date: ['', Validators.required],
      title: ['', Validators.required],
      description: [''],
      photo: ['']
    });
  }

  async saveEvent() {
    const event = this.eventForm.value;
    const events = (await this.storage.get('events')) || [];
    events.push(event);
    await this.storage.set('events', events);
  }
}
