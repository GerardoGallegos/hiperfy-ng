import { Component, OnInit, Input } from '@angular/core';

const AUDIO_EXAMPLE = 'https://mp3d.jamendo.com/?trackid=174271&format=mp32&from=app-97dab294'

@Component({
  selector: 'vf-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  
  // Autoplay on load, default true
  @Input() autoplay: boolean = true

  // The playing status
  isPlaying: boolean

  duration: number

  // The audio's volumen 0 - 1
  vol: number

  // Total audio's duration in secods
  // of current audio track
  totalTime: number

  // The current audio time, it updates
  // with the timeupdate listener
  currentTime: number

  // Audio Element created in runtime
  audio: any

  // Percentage reproduced
  reproduced: number

  constructor() {
    this.reproduced = 0
    this.duration = 0
    this.vol = 0.75
    this.currentTime = 0
    this.isPlaying = false

    this.audio = new Audio()
    this.audio.type = 'audio/mpeg'
    this.audio.src = AUDIO_EXAMPLE

    this.audio.onloadedmetadata = () => {
      this.totalTime = this.audio.duration
      if (this.autoplay) this.play()
    }

    this.audio.addEventListener("timeupdate", () => {
      this.currentTime = this.audio.currentTime
      this.reproduced = this.audio.currentTime * 100 / this.totalTime
    }, false)
  }

  ngOnInit() {
  }

  play () {
    this.isPlaying = true
    this.audio.play()
  }

  pause () {
    this.isPlaying = false
    this.audio.pause()
  }

  togglePlay () {
    if (!this.isPlaying) {
      this.play()
    } else {
      this.pause()
    }
  }

  skip (e) {
    const percent: number = e.offsetX * 100 / e.currentTarget.clientWidth
    this.reproduced = percent
    this.audio.currentTime = percent * this.totalTime / 100
  }

  onMouseMove (e) {
    // console.log(e.offsetX )
  }

}
