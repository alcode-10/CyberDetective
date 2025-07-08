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
        .then(() => {
          setPlaybackBlocked(false);
        })
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
      <button onClick={handleToggle} style={styles.button}>
        {playing ? " Mute Music" : " Play Music"}
      </button>
    </>
  );
};

const styles = {
  button: {
    position: "fixed",
    bottom: "16px",
    right: "15px",
    zIndex: 900000,
    padding: "0.5rem 0.5rem",
    fontSize: "0.95rem",
    fontWeight: "bold",
    backgroundColor: "crimson",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 0 5px #ff0055, 0 0 10px #ff0055a8",
    transition: "transform 0.2s ease-in-out",
    
  },
};

export default MusicPlayer;
