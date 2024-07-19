import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/admin/services/auth.service';
import { ScrollService } from 'src/app/modules/core/services/scroll.service';
import { ApiService } from '../../services/api.service';
import { Email } from 'src/app/modules/core/models/docs.model';
// import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(
    private scrollService: ScrollService,
    private apiService: ApiService
  ) {}
  email: Email = {
    email: '',
    name: '',
    text: '',
  };
  async send() {
    this.apiService.postEmail(this.email).subscribe({
      next: () => {
        window.alert('wiadomość poprawnie wysłana');
      },
      error: (err) => {
        window.alert('Error, spróbuj ponownie');
      },
    });
  }

  emailRegex: string = '';
  errorText!: string;
  ngOnInit(): void {
    setTimeout(() => {
      this.scrollService.scrollToSection();
    }, 200);
  }
}
