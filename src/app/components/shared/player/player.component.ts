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
  isPlaying: boolean = false

  // Mute the audio
  isMute: boolean = false

  // Is used to keep the prev volume
  // when is toggle the mute button
  prevVol: number = 0

  // Type of duration time
  // 'total' 3:00 | 'restant' 1:32
  durationFormat: string = 'total'

  duration: number = 0

  // The audio's volumen 0 - 1
  vol: number = 0.75

  // Total audio's duration in secods
  // of current audio track
  totalTime: number

  // The current audio time, it updates
  // with the timeupdate listener
  currentTime: number = 0

  // Audio Element created in runtime
  audio: any

  // Percentage reproduced
  reproduced: number = 0

  constructor() {
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

  toggleDurationFormat () {
    if (this.durationFormat === 'total') {
      this.durationFormat = 'restant'
    } else {
      this.durationFormat = 'total'
    }
  }

  toggleMute () {
    if (!this.isMute) {
      this.isMute = true
      this.prevVol = this.vol
      this.audio.volume = 0
      this.vol = 0
    } else {
      this.isMute = false
      this.audio.volume = this.prevVol
      this.vol = this.prevVol
    }
  }

  skip (e) {
    const percent: number = this.getPercent(e)
    this.reproduced = percent
    this.audio.currentTime = percent * this.totalTime / 100
    this.isMute = false
  }

  setVol (e) {
    const vol: number = this.getPercent(e) / 100
    this.vol = vol
    this.audio.volume = vol
  }

  getPercent (event): number {
    return event.offsetX * 100 / event.currentTarget.clientWidth
  }

  onMouseMove (e) {
    // console.log(e.offsetX )
  }

}
