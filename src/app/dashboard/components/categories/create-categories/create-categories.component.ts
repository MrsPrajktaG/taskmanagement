import { Component } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { CategoriesService } from '../../../services/categories.service';
import { StorageService } from '../../../../auth/storage/storage.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-categories',
  templateUrl: './create-categories.component.html',
  styleUrl: './create-categories.component.css'
})
export class CreateCategoriesComponent {
  constructor(private service:CategoriesService,private storage:StorageService,private router:Router){}

  form:FormGroup=new FormGroup({
    name:new FormControl(''),
    notes:new FormControl('')
  })

  formSubmit(){
    console.log(this.form.value);
  
    this.service.addcategories(this.form.value).subscribe(()=>{
    this.router.navigate(['/categories']);
    })
   }

}
