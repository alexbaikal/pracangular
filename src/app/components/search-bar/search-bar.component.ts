import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  public logo = 'assets/images/logo.svg';

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    this.router.navigate(['search', form.value.search]);
  }
}
