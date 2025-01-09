import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-about-me',
  imports: [
    NgIf,
    ReactiveFormsModule,
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMeComponent {

  userForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.userForm = this.fb.group({
      firstName: new FormControl<string>('', [Validators.required]),
      lastName: new FormControl<string>('', [Validators.required]),
      dob: new FormControl<string>('', [Validators.required]),
      email: new FormControl<string>('', [Validators.required, Validators.email]),
      phone: new FormControl<string>('', [Validators.required, Validators.pattern(/^\+?\d{10,12}$/)])
    });
  }

  onSubmit(event: Event): void {
    this.userForm.markAllAsTouched();
    event.preventDefault();

    if (this.userForm.valid) {
      console.log('Form Submitted!', this.userForm.value);
      this.router.navigate(['/education']);
    } else {
      console.log('Form is invalid!');
    }
  }
}
