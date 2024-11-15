import { Component } from '@angular/core';
import { OllamaService } from '../../service/ollamaservice.service';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

  constructor(
    private ia : OllamaService
  ) { }


  public chat(request : string) {
    this.ia.generateText(request).subscribe({
      next: response => console.log(response),

      error: error => console.error(error),

      complete: () => console.log('Mensagem recebida com sucesso!')
    })
  }

}
