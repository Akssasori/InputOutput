import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  title = 'aluno';

  //recebendo uma mensagem
  //filho do App
  @Input() mensagem : string; //coocar dentro do [] la no html que vai chamar ele
  // atenção não posso colocar o mesmo nome da mensagem qu esta no pai(msg)
  //tem que ser diferente


  constructor() { }

  ngOnInit() {

  }

}
