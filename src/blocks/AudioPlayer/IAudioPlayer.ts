export default interface IAudioPlayer {
  albumcover: string;
  artist: string;
  volume: string;
  track: {
    name: string;
    length: string;
  }
}
