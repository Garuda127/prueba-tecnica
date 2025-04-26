import { inject, Injectable, signal } from '@angular/core';
import { Database, onValue, push, ref } from '@angular/fire/database';
import { HistoryElement, HistoryValue } from '../interfaces/history.interface';

@Injectable({
  providedIn: 'root',
})
export class RealtimeDbService {
  private database: Database = inject(Database);

  items = signal<HistoryElement[]>([]);
  currentMultiples = signal<HistoryValue[]>([]);
  constructor() {
    this.GetHistory();
  }

  /**
   *
   * @description Funcion para obtener los datos de la base de datos de firebase con la llave **history**
   *
   */
  GetHistory() {
    const itemsRef = ref(this.database, 'history');
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const historyElements = Object.values(data) as HistoryElement[];
        this.items.set(historyElements);
      } else {
        this.items.set([]);
      }
    });
  }

  /**
   *
   * @param number - numero llave o el que ingreso el usuario
   * @description Funcion para generar los multiplos
   * si tiene multiplos de 3 - verde
   * si tiene multiplos de 5 - rojo
   * si tiene multiplos de 7 - azul
   * si no tiene multiplos de 3, 5 o 7 - negro
   * en caso de tener 1 o mas multiplos tomara el menor
   */
  private generateMultiples(number: number) {
    const values: HistoryValue[] = [];
    for (let i = 0; i <= number; i++) {
      let color: 'green' | 'red' | 'blue' | 'black' = 'black';

      if (i % 3 === 0) color = 'green';
      else if (i % 5 === 0) color = 'red';
      else if (i % 7 === 0) color = 'blue';

      values.push({
        value: i,
        color,
      });
    }
    this.currentMultiples.set(values);
  }

  /**
   *
   * @param number - numero llave o el que ingreso el usuario
   * @param values - lista de multipols ya generados
   * @description Funcion para guardar el historial en el RealTime Database
   */
  private saveHistory(number: number, values: HistoryValue[]) {
    if (this.items().some((item) => item.number === number)) return;

    const historyElement: HistoryElement = {
      number,
      values,
    };
    const historyRef = ref(this.database, 'history');

    push(historyRef, historyElement);
    this.items.set([...this.items()]);
  }

  generateAndSaveMultiples(n: number) {
    this.generateMultiples(n);
    this.saveHistory(n, this.currentMultiples());
  }

  /**
   *
   * @param number
   * @description Funcion para seleccionar un item del historial y renderizar el valor
   */
  choseItem(number: number) {
    const item = this.items().find((item) => item.number === number);
    if (item) this.currentMultiples.set(item.values);
  }
}
