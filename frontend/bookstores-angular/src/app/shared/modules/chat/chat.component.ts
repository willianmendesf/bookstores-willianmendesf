import { Component } from '@angular/core';
import { OllamaService } from '../../service/ollamaservice.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

  constructor(
    private ia : OllamaService
  ) { }

  chatForm = new FormGroup({
    mensagem: new FormControl('')  
  });

  public chat(request : string) {
    this.ia.generateText(request).subscribe({
      next: response => console.log(response),

      error: error => console.error(error),

      complete: () => console.log('Mensagem recebida com sucesso!')
    })
  }

  onSubmit() {
    console.log(this.chatForm.value);
  }

}
