import { useEffect, useRef } from "react";

type MediaVideoProps = {
  playbackRate?: number;
} & React.DetailedHTMLProps<
  React.VideoHTMLAttributes<HTMLVideoElement>,
  HTMLVideoElement
>;

export default ({ playbackRate, ...props }: MediaVideoProps) => {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (playbackRate === undefined) return;
    if (!ref.current) return;
    ref.current.playbackRate = playbackRate;
  }, [playbackRate]);

  return <video ref={ref} {...props} />;
};
