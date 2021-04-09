import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-search-query',
  templateUrl: './search-query.component.html',
  styleUrls: ['./search-query.component.scss']
})
export class SearchQueryComponent implements OnInit {
  searchForm: FormGroup;
  
  matcher: MyErrorStateMatcher = new MyErrorStateMatcher();
  
  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.createForm();
  }
  
  createForm = (): FormGroup => this.searchForm = this.fb.group({ query: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s.]{2,}[,]{1}[a-zA-Z]{2}$/), Validators.minLength(5)]] });
  
  
  getWeather = (loc: string): void => console.log(loc);
  
  onSubmit = (): void => {
    let q = this.searchForm.value.query;
    
    console.log(q);
    
    this.searchForm.reset();
    
    // Send search query
  }
}
