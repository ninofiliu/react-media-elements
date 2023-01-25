/// <reference types="react" />
type MediaVideoProps = {
    playbackRate?: number;
} & React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
declare const _default: ({ playbackRate, ...props }: MediaVideoProps) => JSX.Element;
export default _default;
