import { Component, OnInit } from '@angular/core';
import { Club } from 'src/app/_model/club';
import { ListarClubesService } from 'src/app/_service/listar-clubes.service';

@Component({
  selector: 'app-clubes',
  templateUrl: './clubes.component.html',
  styleUrls: ['./clubes.component.css'],
})
export class ClubesComponent implements OnInit {
  club: Club[] = [];
  clubGol!: Club;
  constructor(private clubService: ListarClubesService) {}
  ganadores: Club[] = [];
  ganadores2: Club[] = [];
  rivales1: Club[] = [];
  rivales2: Club[] = [];

  uno!: number;
  dos!: number;
  tres!: number;
  cuatro!: number;

  ganador!: Club;

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.club = this.clubService.listarClubes();


  }

  equipo(equipo: number): number {
    let valor!: number;
    switch (equipo) {
      case 1:
        valor = this.uno;
        break;
      case 2:
        valor = this.dos;
        break;

      case 3:
        valor = this.tres;
        break;

      case 4:
        valor = this.cuatro;
        break;
    }
    return valor;
  }

  golesAleatorio() {
    this.uno = Math.round(Math.random() * (8 + 0));
    this.dos = Math.round(Math.random() * (8 + 0));
    this.tres = Math.round(Math.random() * (8 + 0));
    this.cuatro = Math.round(Math.random() * (8 + 0));
  }

  seleccionarEquipoAleatorio() {
    this.uno = Math.round(Math.random() * (4 + 0));
    this.dos = Math.round(Math.random() * (4 + 0));
    this.tres = Math.round(Math.random() * (4 + 0));
    this.cuatro = Math.round(Math.random() * (4 + 0));
  }

  equiposGanadores() {
    this.ganadores2 = [];
    this.rivales1 = [];
    this.rivales2 = [];

    do {
      this.golesAleatorio();
    } while (this.uno === this.dos || this.tres === this.cuatro);

    for (let index = 0; index < this.club.length; index++) {
      this.clubGol = this.club[index];

      this.clubGol.gol = this.equipo(index + 1);
      if (this.club[index].orden % 2 == 0) {
        this.rivales1.push(this.clubGol);
      } else {
        this.rivales2.push(this.clubGol);
      }

    }

    //equipos clasifican
    for (let index = 0; index < this.rivales1.length; index++) {
      if (this.rivales1[index].gol > this.rivales2[index].gol) {
        this.ganadores.push(this.rivales1[index]);
      } else {
        this.ganadores.push(this.rivales2[index]);
      }
    }
   
    //ganador



      if (this.ganadores[0].gol>this.ganadores[1].gol) {
        this.ganador = this.ganadores[0];
      }else{
        this.ganador = this.ganadores[1];
      }
    

  }
}
