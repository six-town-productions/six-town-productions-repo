// Import Links & Hooks
import { useEffect, useState, useRef } from 'react';
// Import Images
import coverImg from "../assets/cover-circle.png";
// Import Audio
import track1 from "../music/eMastered_Summer-Nights.mp3";
import track2 from "../music/eMastered_West-Side.mp3";
import track3 from "../music/eMastered_Dangerous.mp3";
import track4 from "../music/eMastered_In-The-Mood.mp3";
import track5 from "../music/eMastered_Tanmay-Chalamet.mp3";

const musicList = [
    {
        img: coverImg,
        name: 'Summer Nights',
        artist: 'SKVNT',
        audio: track1
    },
    {
        img: coverImg,
        name: 'West Side',
        artist: 'SKVNT',
        audio: track2
    },
    {
        img: coverImg,
        name: 'Dangerous',
        artist: 'SKVNT',
        audio: track3
    },
    {
        img: coverImg,
        name: 'In The Mood',
        artist: 'SKVNT',
        audio: track4
    },
    {
        img: coverImg,
        name: 'Tanmay Chalamet',
        artist: 'SKVNT',
        audio: track5
    }
];

const Player = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isRandom, setIsRandom] = useState(false)
    const [trackIndex, setTrackIndex] = useState(0)
    const [currTrack, setCurrTrack] = useState({})
    const [currentSong, setCurrentSong] = useState({
        src: currTrack.audio,
        loop: false
    });
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null)
    const sliderRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;
        audio.addEventListener('timeupdate', handleTimeUpdate);
        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, []);

    const handleTimeUpdate = () => {
        const audio = audioRef.current;
        const slider = sliderRef.current;
        slider.value = audio.currentTime / audio.duration;
    };

    const seekTo = (e) => {
        audioRef.current.currentTime = e.target.value * audioRef.current.duration;
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
        const remainingSeconds = Math.floor(seconds % 60).toString().padStart(2, '0');
        return `${minutes}:${remainingSeconds}`;
    };

    function reset() {
        const time = '00:00';
        const totalTime = '00:00';
        const slider = sliderRef.current;
        setCurrentTime(time);
        setDuration(totalTime);
        slider.value = 0;
    }

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.ontimeupdate = () => {
                let time = formatTime(audioRef.current.currentTime)
                let totalTime = formatTime(audioRef.current.duration)
                setCurrentTime(time)
                setDuration(totalTime)
            }
        }
    }, [audioRef])

    useEffect(() => {
        setCurrTrack(musicList[trackIndex]);
        reset();
    }, [trackIndex])

    function playPause() {
        if (!isPlaying) {
            audioRef.current.play()
            setIsPlaying(!isPlaying)
        } else {
            audioRef.current.pause()
            setIsPlaying(!isPlaying)
        }
    }

    function nextTrack() {
        reset();
        if (currentSong.loop) {
            setTrackIndex(trackIndex)
        } else {
            if (trackIndex < musicList.length - 1 && isRandom === false) {
                setTrackIndex(trackIndex + 1)
            } else if (trackIndex < musicList.length - 1 && isRandom === true) {
                let randomIndex = Number.parseInt(Math.random() * musicList.length);
                setTrackIndex(randomIndex);
            }
            else {
                setTrackIndex(0);
            }
        }
        setIsPlaying(!isPlaying)
    }

    function prevTrack() {
        if (currentSong.loop) {
            setTrackIndex(trackIndex)
        } else {
            if (trackIndex === 0) {
                setTrackIndex(musicList.length - 1)
            } else {
                setTrackIndex(trackIndex - 1);
            }
        }
        setIsPlaying(!isPlaying)
    }

    function randomTrack() {
        setIsRandom(!isRandom)
    }

    function repeatTrack() {
        setCurrentSong({
            ...currentSong,
            loop: !currentSong.loop
        });
    }

    function setVolumeTo(e) {
        audioRef.current.volume = e.target.value
    }

    return (
        <section>
            <ul>
                <audio ref={audioRef} src={currTrack.audio} loop={currentSong.loop}></audio>
                <button className="prevTrack" onClick={() => { prevTrack() }}>
                    <i className="fa-solid fa-backward-step"></i>
                </button>
                <button className="playPauseTrack" onClick={() => { playPause() }}>
                    <i className={isPlaying ? "fa-solid fa-circle-pause" : "fa-solid fa-circle-play"}></i>
                </button>
                <button className="nextTrack" onClick={() => { nextTrack() }}>
                    <i className="fa-solid fa-forward-step"></i>
                </button>
                <button className="randomTrack" onClick={() => { randomTrack() }}>
                    <i className={isRandom ? "fa-solid fa-shuffle randomActive" : "fa-solid fa-shuffle"}></i>
                </button>
                <button className="repeatTrack" onClick={() => { repeatTrack() }}>
                    <i className={currentSong.loop ? "fa-solid fa-repeat randomActive" : "fa-solid fa-repeat"}></i>
                </button>
            </ul>
            <ul style={{ backgroundColor: "white" }} className="sliderContainer">
                <li className="currentTime">{currentTime}</li>
                <li><input ref={sliderRef} className="seekSlider" type="range" min="0" max="1" step="0.01" onClick={seekTo}
                /></li>
                <li className="totalDuration">{duration}</li>
            </ul>
            <ul style={{ backgroundColor: "white" }} className="sliderContainer">
                <li><i className="fa-solid fa-volume-low"></i></li>
                <li><input type="range" min="0" max="1" step="0.01" className="volumeSlider" onChange={setVolumeTo}
                /></li>
                <li><i className="fa-solid fa-volume-high"></i></li>
            </ul>
        </section>
    )
}

export default Player;