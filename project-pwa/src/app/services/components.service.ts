import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MemesResponse } from '../models/component.interface';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

  private api = 'https://api.imgflip.com/get_memes';

  constructor(private http: HttpClient) { }

  getMemes(): Observable<MemesResponse> {
    return this.http.get<MemesResponse>(this.api);
  }
}
