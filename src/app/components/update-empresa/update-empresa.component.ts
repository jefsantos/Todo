import { Component, OnInit } from '@angular/core';


import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from 'src/app/models/empresa';
import { Todo } from 'src/app/models/todo';
import { Users } from 'src/app/models/users';
import { EmpresaService } from 'src/app/services/empresa.service';
import { TodoService } from 'src/app/services/todo.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-update-empresa',
  templateUrl: './update-empresa.component.html',
  styleUrls: ['./update-empresa.component.css']
})
export class UpdateEmpresaComponent implements OnInit {

  


  empresa: Empresa= {

    id:'',
    cnpj:'',
    nomeFantasia:'',
    razaoSocial:'',
    

  }

  constructor(private router:Router, private service: EmpresaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.empresa.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  
  }


findById(): void{
  this.service.findById(this.empresa.id).subscribe((resposta)=>{
this.empresa = resposta;

  })

}


updateEmpresa():void{

  this.service.update(this.empresa).subscribe((resposta)=>{
 this.service.message('Informações atualizadas com sucesso')
 this.router.navigate([''])


  },err =>{
    this.service.message('FALHA NA ATUALIZAÇÃO')
    this.router.navigate([''])

  })
}

  cancelar():void{
    this.router.navigate([''])
  }



}

