/// <reference types="react" />
type MediaProps = {
    playbackRate?: number;
    preservesPitch?: boolean;
    srcObject?: MediaStream;
    volume?: number;
};
type MediaVideoProps = MediaProps & React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
type MediaAudioProps = MediaProps & React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>;
export declare const MediaAudio: (props: MediaAudioProps) => JSX.Element;
export declare const MediaVideo: (props: MediaVideoProps) => JSX.Element;
export {};
