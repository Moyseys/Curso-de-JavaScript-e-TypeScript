// @ts-check
interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement;
  stopButton: HTMLButtonElement;
  playButton: HTMLButtonElement;
}

interface VideoPlayerAction {
  playToggle(): void;
  stop(): void;
  iniciarEventos(): void;
}

export default class VideoPlayer implements VideoPlayerAction {
  private videoPlayer: HTMLVideoElement;
  private stopButton: HTMLButtonElement;
  private playButton: HTMLButtonElement;

  constructor(videoPlayerElements: VideoPlayerElements) {
    this.videoPlayer = videoPlayerElements.videoPlayer;
    this.stopButton = videoPlayerElements.stopButton;
    this.playButton = videoPlayerElements.playButton;
  }

  playToggle(): void {
    if (this.videoPlayer.paused) {
      this.playButton.innerText = 'pause';
      this.videoPlayer.play();
    } else {
      this.playButton.innerText = 'play';
      this.videoPlayer.pause();
    }
  }

  stop(): void {
    this.videoPlayer.pause();
    this.videoPlayer.currentTime = 0;
    this.playButton.innerText = 'Play';
  }

  iniciarEventos(): void {
    //nessa situação foi usado arrowfunction para não altrar o this
    this.playButton.addEventListener('click', () => {
      this.playToggle();
    });

    this.stopButton.addEventListener('click', () => {
      this.stop();
    });
  }
}

const videoPlayerElements: VideoPlayerElements = {
  videoPlayer: document.querySelector('.video') as HTMLVideoElement,
  stopButton: document.querySelector('.stop') as HTMLButtonElement,
  playButton: document.querySelector('.play') as HTMLButtonElement,
};

const v1 = new VideoPlayer(videoPlayerElements);
v1.iniciarEventos();
