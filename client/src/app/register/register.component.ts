import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();

  model: any = {};

  constructor(
    private accountService: AccountService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  register() {
    this.accountService.register(this.model).subscribe({
      next: (response) => {
        this.cancel();
      },
      error: (err) => {
        console.log(err);
        this.toastr.error(err.error);
      },
    });
    console.log(this.model);
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
