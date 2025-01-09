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

  userForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.userForm = this.fb.group({
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
    return this.userForm.get('education') as FormArray;
  }

  addBlock(): void {
    this.educationBlocks.push(this.createEducationBlock());
  }

  removeBlock(index: number): void {
    this.educationBlocks.removeAt(index);
  }

  onSubmit(): void {
    this.userForm.markAllAsTouched();

    if (this.userForm.valid) {
      this.router.navigate(['/work-experience']);
    }
  }
}
