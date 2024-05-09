import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrl: './song-card.component.css'
})
export class SongCardComponent {
  @Input() public playlistThumbnail!: string;
  @Input() public title!: string;
  @Input() public description!: string;
}
