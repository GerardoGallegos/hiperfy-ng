import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'vf-new-playlist',
  templateUrl: './new-playlist.component.html',
  styleUrls: ['./new-playlist.component.css']
})
export class NewPlaylistComponent implements OnInit {
  @Input() show:boolean = false

  @Output() onCloseModal: EventEmitter<boolean>

  constructor() {
    this.onCloseModal = new EventEmitter()
  }

  ngOnInit() {
  }
  
  closeModal () {
    this.onCloseModal.emit(false)
  }

  modalClick (e) {
    e.stopPropagation()
  }

  addNewPlaylist (name) {
    console.log(name)
    this.closeModal()
  }

}
