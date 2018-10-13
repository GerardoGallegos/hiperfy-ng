import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vf-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showModal: boolean = false

  constructor() { }

  ngOnInit() {
  }

  openModal () {
    this.showModal = true
  }

  closeModal () {
    this.showModal = false
  }

}
