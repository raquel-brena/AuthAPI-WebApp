import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: '../form.component.scss',
})
export class RegisterComponent {
  formRegister = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private httpClient: HttpClient) {}

  onSubmit() {
    this.httpClient
      .post('http://localhost:8080/auth/register', this.formRegister.value)
      .subscribe(
        (data: any) => {
          console.log('POST request is successful', data);
        },
        (error) => {
          console.log('Error', error);
        }
      );
  }
}
