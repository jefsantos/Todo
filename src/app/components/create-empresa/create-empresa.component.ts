import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EmpresaService } from 'src/app/services/empresa.service';


import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Empresa } from 'src/app/models/empresa';

@Component({
  selector: 'app-create-empresa',
  templateUrl: './create-empresa.component.html',
  styleUrls: ['./create-empresa.component.css']
})
export class CreateEmpresaComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
 
 filteredOptions: Observable<string[]> | undefined;


  empresa: Empresa= {

    cnpj:'',
    razaoSocial:'',
    nomeFantasia:''


  }

  constructor(private router:Router, private service: EmpresaService) { }

  ngOnInit(): void {

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );

  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  create(): void{
    
    this.service.create(this.empresa).subscribe((resposta)=>{
    this.service.message('Empresa Criada com Sucesso');
    this.router.navigate(['']);
  }, err =>{
    this.service.message('empresa Criado sem Sucesso - FALHA');
    this.router.navigate(['']);
  })
  }

  cancelar():void{
    this.router.navigate([''])
  }



}
