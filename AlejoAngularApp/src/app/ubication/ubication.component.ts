import { Component, OnInit } from '@angular/core';

import { UbicationService } from '../shared/ubication.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ubication',
  templateUrl: './ubication.component.html',
  styleUrls: ['./ubication.component.css'],
  providers: [UbicationService]
})
export class UbicationComponent implements OnInit {

  constructor(private ubicationService: UbicationService) { }

  ngOnInit() {
  }

  onSubmit(form : NgForm){
    
  }
}
