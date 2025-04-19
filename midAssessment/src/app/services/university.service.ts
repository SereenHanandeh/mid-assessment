import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { University } from '../models/university.model';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  private apiUrl = 'http://universities.hipolabs.com/search?country=jordan';

  constructor(private http: HttpClient) {}

  getUniversities(): Observable<University[]> {
    return this.http.get<University[]>(this.apiUrl);
  }
}