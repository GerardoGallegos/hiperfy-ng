import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'vf-new-playlist',
  templateUrl: './new-playlist.component.html',
  styleUrls: ['./new-playlist.component.css']
})
export class NewPlaylistComponent implements OnInit {
  @Input() show:boolean = false

  @Output() onCloseModal: EventEmitter<boolean>

  @ViewChild("input") input: ElementRef

  constructor() {
    this.onCloseModal = new EventEmitter()
  }

  ngOnInit() {
  }

  ngAfterViewChecked () {
    this.input.nativeElement.focus()
    this.input.nativeElement.setSelectionRange(0,50)
  }
  
  closeModal () {
    this.onCloseModal.emit(false)
  }

  modalClick (e) {
    e.stopPropagation()
  }

  addNewPlaylist (name) {
    console.log(name)
    this.input.nativeElement.value = 'New Playlist'
    this.closeModal()
  }

}
