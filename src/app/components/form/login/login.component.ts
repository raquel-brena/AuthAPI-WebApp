import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: '../form.component.scss',
})
export class LoginComponent {
  form = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private httpClient: HttpClient) {}

  onSubmit() {
    console.log(this.form.value);
    this.httpClient
      .post('http://localhost:8080/auth/login', this.form.value)
      .subscribe(
        (data: any) => {
          localStorage.setItem('token', data.token);
          console.log('POST request is successful', data);
        },
        (error) => {
          console.log('Error', error);
        }
      );
  }
}
