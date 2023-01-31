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
    const [trackIndex, setTrackIndex] = useState(0)
    const [currTrack, setCurrTrack] = useState({})
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const [isPlaying, setIsPlaying] = useState(false)
    const [isRandom, setIsRandom] = useState(false)
    const [currentSong, setCurrentSong] = useState({
        src: currTrack.audio,
        loop: false
    });
    
    const audioRef = useRef(null)
    const sliderRef = useRef(null);

    useEffect(() => {
        setCurrTrack(musicList[trackIndex]);
    }, [trackIndex])

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
    }, [isPlaying])

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.ontimeupdate = () => {
                let time = audioRef.current.currentTime;
                const audio = audioRef.current;
                const slider = sliderRef.current;
                if (time === 0) {
                    let totalTime = formatTime(0)
                    setDuration(totalTime)
                    slider.value = 0;
                } else {
                    let totalTime = formatTime(audioRef.current.duration)
                    setDuration(totalTime)
                    slider.value = audio.currentTime / audio.duration;
                }
                setCurrentTime(formatTime(time))
            }
        }
    }, [audioRef])

    useEffect(() => {
        setCurrentTime(formatTime(0))
        setDuration(formatTime(0))
        const slider = sliderRef.current;
        slider.value = 0;
    }, []);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
        const remainingSeconds = Math.floor(seconds % 60).toString().padStart(2, '0');
        return `${minutes}:${remainingSeconds}`;
    };

    const seekTo = (e) => {
        audioRef.current.currentTime = e.target.value * audioRef.current.duration;
    };

    function playPause() {
        setIsPlaying(!isPlaying)
    }
    function nextTrack() {
        if (currentSong.loop) {
            setCurrentSong({
                ...currentSong,
                loop: false
            });
        }
        if (trackIndex < musicList.length - 1 && isRandom === false) {
            setTrackIndex(trackIndex + 1)
        } else if (trackIndex < musicList.length - 1 && isRandom === true) {
            let randomIndex = Number.parseInt(Math.random() * musicList.length);
            setTrackIndex(randomIndex);
        } else {
            setTrackIndex(0);
        }
        setIsPlaying(false)
    }
    function prevTrack() {
        if (currentSong.loop) {
            setCurrentSong({
                ...currentSong,
                loop: false
            });
        }
        if (trackIndex === 0) {
            setTrackIndex(musicList.length - 1)
        } else {
            setTrackIndex(trackIndex - 1);
        }
        setIsPlaying(false)
    }
    function randomTrack() {
        setCurrentSong({
            ...currentSong,
            loop: false
        });
        setIsRandom(!isRandom)
    }
    function repeatTrack() {
        setIsRandom(false)
        setCurrentSong({
            ...currentSong,
            loop: !currentSong.loop
        });
    }

    function setVolumeTo(e) {
        audioRef.current.volume = e.target.value
    }

    return (
        <section id="music" className="player">
            <div className="border">
                <audio ref={audioRef} src={currTrack.audio} loop={currentSong.loop}></audio>
                <ul className="details">
                    <li className="nowPlaying">PLAYING TRACK {trackIndex + 1} OF {musicList.length}</li>
                    <li className="trackArt"><img src={currTrack.img} alt="album cover of track"/></li>
                    <li className="trackName">{currTrack.name}</li>
                    <li className="trackArtist">{currTrack.artist}</li>
                </ul>
                <ul className="sliderContainer">
                    <li className="currentTime">{currentTime}</li>
                    <li>
                        <input ref={sliderRef} className="seekSlider" type="range" min="0" max="1" step="0.01" onClick={seekTo}/>
                    </li>
                    <li className="totalDuration">{duration}</li>
                </ul>
                <ul className="buttonsPlayer">
                    <li className="randomTrack" onClick={() => { randomTrack() }}>
                        <i className={isRandom ? "fa-solid fa-shuffle randomActive" : "fa-solid fa-shuffle"}></i>
                    </li>
                    <li className="prevTrack" onClick={() => { prevTrack() }}>
                        <i className="fa-solid fa-backward-step"></i>
                    </li>
                    <li className="playPauseTrack" onClick={() => { playPause() }}>
                        <i className={isPlaying ? "fa-solid fa-circle-pause" : "fa-solid fa-circle-play"}></i>
                    </li>
                    <li className="nextTrack" onClick={() => { nextTrack() }}>
                        <i className="fa-solid fa-forward-step"></i>
                    </li>
                    <li className="repeatTrack" onClick={() => { repeatTrack() }}>
                        <i className={currentSong.loop ? "fa-solid fa-repeat randomActive" : "fa-solid fa-repeat"}></i>
                    </li>
                </ul>
                <ul className="sliderContainerVolume">
                    <ul>
                        <li><i className="fa-solid fa-volume-low"></i></li>
                        <li className='volumeSliderContainer'>
                            <input type="range" min="0" max="1" step="0.01" className="volumeSlider" onChange={setVolumeTo}/>
                        </li>
                        <li><i className="fa-solid fa-volume-high"></i></li>
                    </ul>
                    <ul>
                        <li><i className="fa-solid fa-message" //onclick={createComment()}
                        ></i></li>
                        <li><i className="fa-solid fa-heart" //onclick={addLike()}
                        ></i></li>
                        <li><p className="likeNumber">0</p></li>
                    </ul>
                </ul>
            </div>
        </section>
    )
}

export default Player;