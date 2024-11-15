import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../env/environment';

@Injectable({providedIn: 'root'})

export class ApiService {

  private api = environment.api;

  constructor(
    private http: HttpClient
  ) { }

  public get(uri : string) : Observable<any> {
    return this.http.get<any>(this.api + uri);
  }

  public post(uri : string, data : any) : Observable<any> {
    return this.http.post<any>(this.api + uri, data);
  }

}
