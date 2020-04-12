import { Component, OnInit } from '@angular/core';
import { TestcaseService } from 'src/app/services/testcase.service';
import { ITestCase } from 'src/app/models/testcase';

@Component({
  selector: 'ac-testcase-table',
  templateUrl: './testcase-table.component.html',
  styleUrls: ['./testcase-table.component.scss']
})
export class TestcaseTableComponent implements OnInit {

  testcases: ITestCase[];
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'summary'];

  constructor(private testCaseService: TestcaseService) {

  }

  ngOnInit() {
    this.testCaseService.getAllTestCase().subscribe(testcases => {
      this.testcases = testcases;
      console.log(this.testcases);
    });
  }
}
