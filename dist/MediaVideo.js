import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
export default ({ playbackRate, ...props }) => {
    const ref = useRef(null);
    useEffect(() => {
        if (playbackRate === undefined)
            return;
        if (!ref.current)
            return;
        ref.current.playbackRate = playbackRate;
    }, [playbackRate]);
    return _jsx("video", { ref: ref, ...props });
};
