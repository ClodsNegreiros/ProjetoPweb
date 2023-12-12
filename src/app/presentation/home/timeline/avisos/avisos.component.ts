import { Component, OnInit } from '@angular/core';
import { AvisoService } from 'src/app/core/services/aviso.service';
import { Aviso } from 'src/app/domain/entities/Aviso';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.css']
})
export class AvisosComponent implements OnInit {
avisos: Aviso[]= []

constructor(private avisosservice:AvisoService){
}

ngOnInit(): void {
    this.avisosservice.getavisos().subscribe((avisos:Aviso[])=>{
      this.avisos=avisos;
    })
}

}
