import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Empresa } from '../models/empresa';


@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  empresaBaseUrl = environment.empresaBaseUrl;
  contEmpresaBaseUrl = environment.contEmpresaBaseUrl;

  constructor(private http:HttpClient, private snack:MatSnackBar) { }

findAll(): Observable<Empresa[]>{

  return this.http.get<Empresa[]>(this.empresaBaseUrl);
}

EmpresaCont(): Observable<Empresa[]>{
  return this.http.get<Empresa[]>(this.contEmpresaBaseUrl);
}


findById(id: any):Observable<Empresa>{
  const url =  `${this.empresaBaseUrl}/${id}`

  return this.http.get<Empresa>(url)
}

update(empresa: Empresa): Observable<Empresa>{
  const url =  `${this.empresaBaseUrl}/${empresa.id}`
  return this.http.put<Empresa>(url, empresa);

}

delete (id: any): Observable<void>{
  const url =  `${this.empresaBaseUrl}/${id}`
  return this.http.delete<void>(url);
}

create(empresa: Empresa):Observable<Empresa>{
  return this.http.post<Empresa>(this.empresaBaseUrl, empresa);
}

 message (msg: String):void{
   this.snack.open(`${msg}`, 'OK',{
     horizontalPosition:'end',
     verticalPosition:'top',
     duration:4000
   })
 }


}
