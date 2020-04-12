import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TestcaseService } from 'src/app/services/testcase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ac-add-testcase',
  templateUrl: './add-testcase.component.html',
  styleUrls: ['./add-testcase.component.scss']
})
export class AddTestcaseComponent {
  testCaseForm = this.fb.group({
    code: [null, Validators.required],
    funPoint: [null, Validators.required]
  });

  constructor(private fb: FormBuilder,
    private testcaseService: TestcaseService,
    private router: Router) { }

  onSubmit() {
    if (this.testCaseForm.valid) {
      const testcase = this.testCaseForm.value;
      this.testcaseService.addTestCase(testcase).subscribe(rep => {
        alert('成功!');
        this.router.navigate(['/testcase']);
      });
    }
  }
}
