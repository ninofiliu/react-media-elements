import { useState } from "react";
import { MediaAudio, MediaVideo } from "./lib";

export default () => {
  const [srcObject, setSrcObject] = useState<MediaStream | undefined>(
    undefined
  );
  const [volume, setVolume] = useState<number>(1);

  const captureWebcam = async () => {
    setSrcObject(await navigator.mediaDevices.getUserMedia({ video: true }));
  };

  return (
    <>
      <button onClick={captureWebcam}>Capture webcam</button>
      <MediaVideo srcObject={srcObject} autoPlay />
      <input
        type="range"
        value={volume}
        onChange={(evt) => setVolume(+evt.target.value)}
        min={0}
        max={1}
        step={0.1}
      />
      <MediaAudio
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
        loop
        volume={volume}
        controls
      />
    </>
  );
};
