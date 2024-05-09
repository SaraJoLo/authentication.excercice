import { Component } from '@angular/core';
import { FormComponent } from "./form/form.component";

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [FormComponent]
})
export class LoginComponent {

}
