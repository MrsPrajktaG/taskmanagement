import { Component } from '@angular/core';

@Component({
  selector: 'app-admingroups',
  templateUrl: './admingroups.component.html',
  styleUrl: './admingroups.component.css'
})
export class AdmingroupsComponent {

  admingroupstatus(event:Event){
    const inputElement = event.target as HTMLInputElement;
    console.log('checkbox is checked:', inputElement.value,inputElement.checked);
  }

  adminstatus(event:Event){
    const inputElement = event.target as HTMLInputElement;
    console.log('checkbox is checked:',inputElement.value,inputElement.checked);
  }

  designationstatus(event:Event){
    const inputElement = event.target as HTMLInputElement;
    console.log('checkbox is checked:',inputElement.value,inputElement.checked);
  }

  memberstatus(event:Event){
    const inputElement = event.target as HTMLInputElement;
    console.log('checkbox is checked:',inputElement.value,inputElement.checked);
  }

  categoriesstatus(event:Event){
    const inputElement = event.target as HTMLInputElement;
    console.log('checkbox is checked:',inputElement.value,inputElement.checked);
  }

  projectstatus(event:Event){
    const inputElement = event.target as HTMLInputElement;
    console.log('checkbox is checked:',inputElement.value,inputElement.checked);
  }

  taskstatus(event:Event){
    const inputElement = event.target as HTMLInputElement;
    console.log('checkbox is checked:',inputElement.value,inputElement.checked);
  }

  productivitiesstatus(event:Event){
    const inputElement = event.target as HTMLInputElement;
    console.log('checkbox is checked:',inputElement.value,inputElement.checked);
  }

  reportstatus(event:Event){
    const inputElement = event.target as HTMLInputElement;
    console.log('checkbox is checked:',inputElement.value,inputElement.checked);
  }

  settingsstatus(event:Event){
    const inputElement = event.target as HTMLInputElement;
    console.log('checkbox is checked:',inputElement.value,inputElement.checked);
  }



}


