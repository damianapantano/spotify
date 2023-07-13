import { Component, Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/service/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent {
  @Input() mode:'small' | 'big' = 'small'
  @Input() track: TrackModel = { _id: 0, name: '', album: '', url: '', cover: ''};

  constructor(private multimediaService: MultimediaService) {}

  sendPlay(track:TrackModel): void {
    console.log('Enviando canción al reproductor....', track)
    this.multimediaService.callback.emit(track)
  }
}