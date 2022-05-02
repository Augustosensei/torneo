import { Injectable } from '@angular/core';
import { Club } from '../_model/club';

@Injectable({
  providedIn: 'root',
})
export class ListarClubesService {
  constructor() {}

  listarClubes(): Club[] {
    const clubes: Club[] = [
      {
        nombre: 'River',
        img: 'assets/river.png',
        gol: 1,
        orden: 1
      },
      {
        nombre: 'Boca',
        img: 'assets/boca.png',
        gol: 2,
        orden: 2
      },
      {
        nombre: 'San Lorenzo',
        img: 'assets/san_lorenzo.png',
        gol: 3,
        orden: 3
      },
      {
        nombre: 'Racing',
        img: 'assets/racing.png',
        gol: 4,
        orden: 4
      },
    ];

    return clubes;
  }
}
