import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  allCharacters!:any
  pageNum:Number=1
  singleCharacter!:object
  paso:boolean=false
  constructor(private service: ApiService) {
    
   }

  ngOnInit(): void {
    this.charactersAll();
    this.characterSingle()
  }

  charactersAll(){
    this.service.getCharactersAll().subscribe(
      (data:any) =>(
         this.allCharacters = data.results
        )
    )
    this.pageNum = this.service.page
  }

  onSigPag(){
    this.service.page += 1;
    this.charactersAll()
  }

  onAntPag(){
  if( this.pageNum === 1){ 
    null
  }else{
    this.service.page -= 1;
    this.charactersAll()
  }
  }


  onKeyName(event:any){
    this.service.nameCharacter = event.target.value;
    this.charactersAll()
    console.log(this.service.nameCharacter)
  }

  onSearch(event:any){
    event.preventDefault()
    this.charactersAll()
  }

  characterSingle(){
    this.service.getCharacterSingle().subscribe(
      (data:any) =>(
        this.singleCharacter = data
      )
    )
  }

  getIdCharacter(id:number){
    this.service.id = id
    this.paso = true
    this.characterSingle()
  }

  closeCard(bo:any){
    this.paso = bo
  }

}


//  reloadExp(){
//   this.datosPorfolio.getExperience().pipe(
//     tap(res =>{ this.porfolioExp = res})
//   ).subscribe()
// }