import { CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';
import { Router } from '@angular/router';
import { Empresa } from 'src/app/models/empresa';
import { Todo } from 'src/app/models/todo';
import { EmpresaService } from 'src/app/services/empresa.service';
import { TodoService } from 'src/app/services/todo.service';


@Component({
  selector: 'app-empresa-all',
  templateUrl: './empresa-all.component.html',
  styleUrls: ['./empresa-all.component.css']
})
export class EmpresaAllComponent implements OnInit {

  closed = 0 ;
 
  listEmpresa: Empresa[]=[];
  listFinish: Todo[]=[];
  listCount: any;

  ngOnInit(): void {

    this.findAll();
  }


  constructor(private service:TodoService, private empresaService: EmpresaService,private router: Router) { }

 

  eventPredicate(item:CdkDrag<string>){
    
    return item.data=="teste";
    
   
  }

  voltarReadAll():void{
    this.router.navigate(['']);
  }

  voltarUsersAll():void{
    this.router.navigate(['/empresaAll']);
  }

  delete(id: any):void{
    this.empresaService.delete(id).subscribe((resposta)=>{
      if(resposta===null){
        this.empresaService.message('Tarefa deletada com sucesso')

        this.listEmpresa = this.listEmpresa.filter(empresa=>empresa.id !==id);
      }
    })

  }



  findAll() {
    this.empresaService.findAll().subscribe(data => {
      this.listEmpresa = data;
      if(data.length===1){
        this.empresaService.message(data.length +' Usuario Cadastrado');
      }else if(data.length>1){
        this.empresaService.message(data.length + ' Usuarios Cadastrados');
        
      }else if(data.length< 1){
        this.empresaService.message('NÃO HÁ USUÁRIO CADASTRADOS')
      }

    });


  }

  


}
