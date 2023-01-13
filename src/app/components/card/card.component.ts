import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() singleCharacter!: any
  @Output() closeCard = new EventEmitter() 
  tevas!:boolean
  constructor() { }

  ngOnInit(): void {
    
  }

  onCruz(){
    this.closeCard.emit(false)
  }

}
