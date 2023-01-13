import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  page:number=1;
  nameCharacter:string = '';
  id:number=1;
  constructor(private http:HttpClient) { }

  // get

  getCharactersAll():Observable<object>{
    return this.http.get(`https://rickandmortyapi.com/api/character/?page=${this.page}&name=${this.nameCharacter}`)
  }

  getCharacterSingle():Observable<object>{
    return this.http.get(`https://rickandmortyapi.com/api/character/${this.id}`)
  }
}
