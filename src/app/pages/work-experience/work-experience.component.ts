import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-work-experience',
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkExperienceComponent {

  workExperienceForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.workExperienceForm = this.fb.group({
      work: this.fb.array([this.createPlaceOfWorkBlock()]),
    });
  }

  createPlaceOfWorkBlock(): FormGroup {
    return this.fb.group({
      placeOfWork: ['', Validators.required],
      position: ['', Validators.required],
      startYear: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]],
      endYear: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]]
    });
  }

  get placeOfWorkBlocks(): FormArray {
    return this.workExperienceForm.get('work') as FormArray;
  }

  addBlock(): void {
    this.placeOfWorkBlocks.push(this.createPlaceOfWorkBlock());
  }

  removeBlock(index: number): void {
    this.placeOfWorkBlocks.removeAt(index);
  }

  onSubmit(): void {
    this.workExperienceForm.markAllAsTouched();

    if (this.workExperienceForm.valid) {
      this.router.navigate(['/result']);
    }
  }
}
