import React, { useEffect, useRef, useState } from "react";
import "./Musicplayer.css";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [playbackBlocked, setPlaybackBlocked] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (playing) {
      audio
        .play()
        .then(() => setPlaybackBlocked(false))
        .catch((err) => {
          console.log("Autoplay blocked:", err.message);
          setPlaybackBlocked(true);
        });
    } else {
      audio.pause();
    }
  }, [playing]);

  const handleToggle = () => {
    if (playbackBlocked && !playing) {
      audioRef.current
        .play()
        .then(() => {
          setPlaybackBlocked(false);
          setPlaying(true);
        })
        .catch((err) => {
          console.log("Retry failed:", err.message);
        });
    } else {
      setPlaying((prev) => !prev);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop src="/bgmusic.mp3" />
      <button
        className={`music-toggle-btn ${playing ? "playing" : "muted"}`}
        onClick={handleToggle}
      >
        {playing ? "🔊 Mute" : "🔇 Unmute"}
      </button>
    </>
  );
};

export default MusicPlayer;
