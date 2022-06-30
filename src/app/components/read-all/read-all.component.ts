import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { UsersService } from 'src/app/services/users.service';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.css']
})
export class ReadAllComponent implements OnInit {

  closed = 0 ;
  list: Todo[]=[];
  listFinish: Todo[]=[];
  listCount: any;
  listTodoCont: any;
  listEmpresaCont: any;


  constructor( private empresaService: EmpresaService, private service:TodoService, private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {

    this.findAll();
    this.UsersCont();
    this.TodoCont();
    this.EmpresaCont();
   
  }

  UsersCont(){
    this.usersService.UsersCont().subscribe(data=>{
      this.listCount=data;
    })
  }

  EmpresaCont(){
    this.empresaService.EmpresaCont().subscribe(data=>{
      this.listEmpresaCont=data;
    })
  }

  TodoCont(){
    this.service.TodoCont().subscribe(data=>{
      this.listTodoCont=data;
    })

 
  }

  findAll():void{

    this.service.findAll().subscribe((resposta)=>{
      resposta.forEach(todo=>{
        if(todo.finalizado){
          this.listFinish.push(todo);
        }else{
          this.list.push(todo);
        }

      })
      this.closed= this.listFinish.length
    
    })

  }

  delete(id: any):void{
    this.service.delete(id).subscribe((resposta)=>{
      if(resposta===null){
        this.service.message('Tarefa deletada com sucesso')

        this.list = this.list.filter(todo=>todo.id !==id);
      }
    })

  }

finalizar(item: Todo):void{
  item.finalizado= true
  this.service.update(item).subscribe(()=>{
    this.list = this.list.filter(todo=>todo.id !==item.id);
      this.closed++;

  })

}

  atrasados():void{
    this.router.navigate(['finalizados'])

  }

  empresasGeral(): void{

    this.router.navigate(['empresaAll'])

  }

novoTodo(): void{

  this.router.navigate(['create']);
}

novaEmpresa(): void{
  this.router.navigate(['createEmpresa'])
}

kanban():void{
  this.router.navigate(['kanban']);
}

voltarUsersAll():void{
  this.router.navigate(['/usersAll']);
}


voltarReadAll():void{
  this.router.navigate(['']);
}

telaCadastro(): void{
  this.router.navigate(['createUsers'])
  
}


timeIsIt(){
  this.service.TodoCont().subscribe(data=>{
    this.listTodoCont=data;
  })


}

}
