
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosService } from './cursos.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
    datos: any;

    constructor(private CursosService: CursosService) {}

    ngOnInit() {
        this.CursosService.getCursos().subscribe(data => {
            this.datos = data;
        });
    }
}
/*
export class AppComponent {
  title = 'parcial2';
}*/