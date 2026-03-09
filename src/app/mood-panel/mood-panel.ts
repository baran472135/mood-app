import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mood-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mood-panel.html',
  styleUrls: ['./mood-panel.css']
})
export class MoodPanelComponent {
  currentMood: string = 'Mutlu';

  moodData: { [key: string]: any } = {
    'Mutlu': {
      color: '#FFD700',
      quote: 'Enerjini etrafa yay!',
      task: 'Sevdiğin bir şarkıyı aç.',
      suggestion: 'Smooth Criminal',
      songUrl: 'https://www.youtube.com/watch?v=sFvENQBc-F8&list=RDsFvENQBc-F8&start_radio=1&pp=ygUPc21vb3RoIGNyaW1pbmFsoAcB',
      showSongButton: true
    },
    'Yorgun': {
      color: '#ADD8E6',
      quote: 'Dinlenmek en doğal hakkın.',
      task: 'Bitki çayı iç.',
      suggestion: 'Bitki çayı iç',
      showSongButton: false,
      showTeaButton: true,
      teaText: 'Bitki çayı tarifi',
      teaUrl: 'https://youtu.be/DDJ4tC1xO34?si=ujVKWgtY8-ubc2nU'
    },
    'Odaklı': {
      color: '#2E8B57',
      quote: 'Dünyayı durdur, işine bak.',
      task: 'Telefonu uzaklaştır.',
      suggestion: 'Derin nefes al',
      showSongButton: false
    }
  };

  changeMood(newMood: string) {
    if (this.moodData[newMood]) {
      this.currentMood = newMood;
    }
  }

  openSong(url?: string) {
    const songUrl = url || 'https://www.youtube.com/watch?v=h_D3VFhvs4';
    window.open(songUrl, '_blank');
  }

  
  openTeaRecipe() {
    const url = this.moodData['Yorgun']?.teaUrl;
    if (url) {
      window.open(url, '_blank');
    }
  }
}