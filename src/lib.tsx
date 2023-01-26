import { useEffect, useRef } from "react";

type MediaProps = {
  playbackRate?: number;
  preservesPitch?: boolean;
  srcObject?: MediaStream;
  volume?: number;
};

type MediaVideoProps = MediaProps &
  React.DetailedHTMLProps<
    React.VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  >;

type MediaAudioProps = MediaProps &
  React.DetailedHTMLProps<
    React.AudioHTMLAttributes<HTMLAudioElement>,
    HTMLAudioElement
  >;

const create =
  <Kind extends "audio" | "video">(kind: Kind) =>
  (props: { audio: MediaAudioProps; video: MediaVideoProps }[Kind]) => {
    const ref = useRef<
      { audio: HTMLAudioElement; video: HTMLVideoElement }[Kind] | null
    >(null);

    for (const key of [
      "playbackRate",
      "preservesPitch",
      "srcObject",
      "volume",
    ] as const) {
      useEffect(() => {
        const value = props[key];
        if (value === undefined || ref.current === null) return;
        // @ts-ignore
        ref.current[key] = value;
      }, [props[key]]);
    }

    const { playbackRate, preservesPitch, srcObject, volume, ...nativeProps } =
      props;

    return kind === "audio" ? (
      <audio ref={ref} {...nativeProps} />
    ) : (
      // @ts-ignore
      <video ref={ref} {...nativeProps} />
    );
  };

export const MediaAudio = create("audio");
export const MediaVideo = create("video");
