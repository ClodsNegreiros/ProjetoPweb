import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { forkJoin } from 'rxjs';
import { NotasService } from 'src/app/core/services/notas.service';
import { StudentService } from 'src/app/core/services/student.service';
import { SubjectService } from 'src/app/core/services/subject.service';
import { Grade } from 'src/app/domain/entities/Grade';
import { Subject } from 'src/app/domain/entities/Subject';
Chart.register(...registerables);
@Component({
  selector: 'app-desempenho',
  templateUrl: './desempenho.component.html',
  styleUrls: ['./desempenho.component.css']
})
export class DesempenhoComponent implements OnInit {

  constructor(private studentsservice:StudentService,private subjectservice:SubjectService, private notasservice:NotasService){}

userlogged= JSON.parse(window.localStorage.getItem("user")??"");
notas:number[]=[]
subjects:string[]=[];

@ViewChild("meuCanvas",{static:true}) elemento!:ElementRef;


ngOnInit(): void {

  this.notasservice.findbystudent(this.userlogged.id).subscribe((grades: Grade[]) => {
    const observables = grades.map((grade) =>
      this.subjectservice.getSubjectById(grade.subject!)
    );
    forkJoin(observables).subscribe((subjects: Subject[]) => {
       grades.map((grade, index) => {
        this.notas.push(grade.valor!);
        this.subjects.push( subjects[index].nome!)
       }
       
      )}
      );
      new Chart(this.elemento.nativeElement, {
        type: "line",
        data: {
          labels: this.subjects, // Removido o array extra
          datasets: [
            {
              label: 'Notas',
              data: this.notas, // Removido o array extra
              borderColor: 'rgb(75, 192, 192)', // Cor da linha
              borderWidth: 2, // Largura da linha
              fill: false // Não preencher área sob a linha
            }
          ]
        }
      })

    });
  };


}


