import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private router: Router, private activatedRoute: ActivatedRoute, private renderer: Renderer2) { }

  regiterationForm: FormGroup;
  // sitekey = '6LfmB-IhAAAAAONynjXwFM5OJz-JSN9cuYWNg8Qt';

  ngOnInit() {

    const script = this.renderer.createElement('script');
    script.src = '../../assets/javaScripts/captcha.js';
    this.renderer.appendChild(document.head, script)

    this.regiterationForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'phoneNumber': new FormControl(null, [Validators.required, Validators.minLength(10)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'cln': new FormControl(null, Validators.required),
      'gsti': new FormControl(null),
      'refferelCode': new FormControl(null, Validators.required)
    })
  }

  otpVerification() {
    if (this.regiterationForm.invalid) {
      null
    } else {
      this.router.navigate(['otp-verification'], { relativeTo: this.activatedRoute })
    }
  }
}
