import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgForOf
  ],
  styleUrls: ['./education.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationComponent {
  educationForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.educationForm = this.fb.group({
      education: this.fb.array([this.createEducationBlock()]),
      hasHigherEducation: [false]
    });
  }

  createEducationBlock(): FormGroup {
    return this.fb.group({
      institution: ['', Validators.required],
      startYear: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]],
      endYear: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]]
    });
  }

  get educationBlocks(): FormArray {
    return this.educationForm.get('education') as FormArray;
  }

  addBlock(): void {
    this.educationBlocks.push(this.createEducationBlock());
  }

  removeBlock(index: number): void {
    this.educationBlocks.removeAt(index);
  }

  onSubmit(): void {
    this.educationForm.markAllAsTouched();

    if (this.educationForm.valid) {
      if (this.educationForm.get('hasHigherEducation')?.value) {
        this.router.navigate(['/higher-education']);
      } else {
        this.router.navigate(['/work-experience']);
      }
    }
  }
}
