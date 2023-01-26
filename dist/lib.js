import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
const create = (kind) => (props) => {
    const ref = useRef(null);
    for (const key of [
        "playbackRate",
        "preservesPitch",
        "srcObject",
        "volume",
    ]) {
        useEffect(() => {
            const value = props[key];
            if (value === undefined || ref.current === null)
                return;
            // @ts-ignore
            ref.current[key] = value;
        }, [props[key]]);
    }
    const { playbackRate, preservesPitch, srcObject, volume, ...nativeProps } = props;
    return kind === "audio" ? (_jsx("audio", { ref: ref, ...nativeProps })) : (
    // @ts-ignore
    _jsx("video", { ref: ref, ...nativeProps }));
};
export const MediaAudio = create("audio");
export const MediaVideo = create("video");
