import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface OllamaResponse { }

@Injectable({ providedIn: 'root' })
export class OllamaService {

  private baseUrl = 'http://localhost:11434/api/generate';

  constructor(
    private http: HttpClient
  ) {}

  public generateText(prompt: string): Observable<OllamaResponse> {
    const body = {
      "prompt": prompt,
      "model": 'llama3.2:1b',
      "temperature": 0.7
    };

    return this.http.post<OllamaResponse>(this.baseUrl, body);
  }
}
