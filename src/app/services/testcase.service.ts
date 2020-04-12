import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITestCase } from '../models/testcase';

@Injectable({
  providedIn: 'root'
})
export class TestcaseService {

  constructor(private httpClient: HttpClient) {

  }
  getAllTestCase(): Observable<ITestCase[]> {
    return this.httpClient.get<ITestCase[]>(`http://localhost:5003/api/weatherforecast`);
  }
}
