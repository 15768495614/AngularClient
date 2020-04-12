import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITestCase, TestCase } from '../models/testcase';

@Injectable({
  providedIn: 'root'
})
export class TestcaseService {

  constructor(private httpClient: HttpClient) {

  }
  getAllTestCase(): Observable<TestCase> {
    return this.httpClient.get<TestCase>(`http://localhost:5003/api/services/app/TestCase/GetTestCases`);
  }

  addTestCase(testCase: ITestCase) {
    return this.httpClient.post<any>(`http://localhost:5003/api/services/app/TestCase/Insert`, testCase);
  }
}
