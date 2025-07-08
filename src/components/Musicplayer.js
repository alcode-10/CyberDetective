import React, { useEffect, useRef, useState } from "react";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (playing) {
      audioRef.current.play().catch((e) => console.log("Autoplay blocked"));
    } else {
      audioRef.current.pause();
    }
  }, [playing]);

  return (
    <div style={styles.wrapper}>
      <audio ref={audioRef} loop src="/bgmusic.mp3" />
      <button onClick={() => setPlaying((prev) => !prev)} style={styles.button}>
        {playing ? " Mute Music" : " Play Music"}
      </button>
    </div>
  );
};

const styles = {
  wrapper: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 1000,
    background: "rgba(0, 0, 0, 0.4)",
    padding: "0.8rem 1rem",
    borderRadius: "12px",
    backdropFilter: "blur(6px)",
    boxShadow:
      "0 0 12px rgba(255, 0, 55, 0.6), 0 0 8px rgba(255, 255, 255, 0.2)",
  },
  button: {
    padding: "0.6rem 1.2rem",
    fontSize: "1rem",
    fontWeight: "bold",
    backgroundColor: "crimson",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    boxShadow: "0 0 5px #ff0055, 0 0 10px #ff0055a8",
    transition: "transform 0.2s ease-in-out",
  },
};

export default MusicPlayer;
