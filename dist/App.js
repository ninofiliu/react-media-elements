import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import MediaVideo from "./MediaVideo";
export default () => {
    const [playbackRate, setPlaybackRate] = useState(2);
    const [show, setShow] = useState(true);
    return (_jsxs(_Fragment, { children: [_jsx("h1", { children: "Default" }), _jsx(MediaVideo, { src: "/legit0.webm", width: 480, autoPlay: true, loop: true, muted: true }), _jsx("h1", { children: "With media attributes" }), _jsx("input", { type: "number", value: playbackRate, onChange: (evt) => setPlaybackRate(+evt.target.value) }), _jsx("input", { type: "checkbox", checked: show, onChange: (evt) => setShow(evt.target.checked) }), show && (_jsx(MediaVideo, { src: "/legit0.webm", width: 480, autoPlay: true, loop: true, muted: true, playbackRate: playbackRate }))] }));
};
