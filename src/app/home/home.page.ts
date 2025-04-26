import { Component, inject, signal } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonInput,
  IonButton,
  IonIcon,
  IonCol,
  IonRow,
  IonMenu,
  IonMenuButton,
  IonList,
  IonItem,
  IonLabel,
  MenuController,
  IonFooter,
} from '@ionic/angular/standalone';
import { RealtimeDbService } from '../shared/services/RealtimeDb.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ListNumberComponent } from './ui/list-number/list-number.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonFooter,
    IonLabel,
    IonItem,
    IonList,
    IonRow,
    IonCol,
    IonIcon,
    IonButton,
    IonInput,
    IonCardContent,
    IonCardHeader,
    IonCard,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ReactiveFormsModule,
    ListNumberComponent,
    IonMenu,
    IonMenuButton,
  ],
})
export class HomePage {
  db = inject(RealtimeDbService);
  fb = inject(FormBuilder);
  menu = inject(MenuController);
  //Propiedades
  isAlertOpen = signal(false);
  message = signal('');

  header = signal('Blank');
  alertButtons = ['OK'];

  myForm = this.fb.group({
    number: [0, [Validators.required, Validators.min(0)]],
  });

  onSubmit() {
    const value = this.myForm.get('number')?.value as number;
    this.db.generateAndSaveMultiples(value);
  }

  selectItemHistory(number: number) {
    this.db.choseItem(number);
    this.menu.close('main-content');
  }
}
