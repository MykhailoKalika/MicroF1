import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-higher-education',
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './higher-education.component.html',
  styleUrl: './higher-education.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HigherEducationComponent {

  educationForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.educationForm = this.fb.group({
      education: this.fb.array([this.createEducationBlock()]),
    });
  }

  createEducationBlock(): FormGroup {
    return this.fb.group({
      institution: ['', Validators.required],
      degree: ['', Validators.required],
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
      this.router.navigate(['/work-experience']);
    }
  }
}
