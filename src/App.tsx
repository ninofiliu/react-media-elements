import { useState } from "react";
import MediaVideo from "./MediaVideo";

export default () => {
  const [playbackRate, setPlaybackRate] = useState(2);
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>Default</h1>
      <MediaVideo src="/legit0.webm" width={480} autoPlay loop muted />

      <h1>With media attributes</h1>
      <input
        type="number"
        value={playbackRate}
        onChange={(evt) => setPlaybackRate(+evt.target.value)}
      />
      <input
        type="checkbox"
        checked={show}
        onChange={(evt) => setShow(evt.target.checked)}
      />
      {show && (
        <MediaVideo
          src="/legit0.webm"
          width={480}
          autoPlay
          loop
          muted
          playbackRate={playbackRate}
        />
      )}
    </>
  );
};
