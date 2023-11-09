import {Component, OnInit} from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  showFiller = false;
  $options!: Observable<string[]>;

  ngOnInit(): void {
    this.$options = of(['Crear Cursos', 'Inscribir Cursos'])
  }
}
