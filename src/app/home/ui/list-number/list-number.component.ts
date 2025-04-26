import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { RealtimeDbService } from 'src/app/shared/services/RealtimeDb.service';

@Component({
  selector: 'home-list-number',
  imports: [IonLabel, IonItem, IonList],
  templateUrl: './list-number.component.html',
  styleUrl: './list-number.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListNumberComponent {
  /**
   * @description Diccionario de colores para que coincidan con las clases de Ionic
   */
  colors: Record<'green' | 'red' | 'blue' | 'black', string> = {
    black: 'black',
    blue: 'primary',
    green: 'success',
    red: 'danger',
  };
  db = inject(RealtimeDbService);
}
