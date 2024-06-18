import { Component } from '@angular/core';
import { GastoService } from '../../services/gasto.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrl: './reporte.component.css'
})
export class ReporteComponent {
  constructor(private gastoService:GastoService) {
    
  }

}
