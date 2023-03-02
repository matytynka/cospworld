import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CostumesService {

  constructor(private http: HttpClient) {}

  async getAll(): Promise<any> {
    const url: string = "http://localhost:3000/costumes/";
    const task: Observable<any> = this.http.get<any>(url, {observe: "body", responseType: "json"});
    return await lastValueFrom(task);
  }
}
