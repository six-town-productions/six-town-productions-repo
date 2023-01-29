import ReactPlayer from 'react-player'
// Import Links & Hooks
import { isRouteErrorResponse, Link } from "react-router-dom";
import { useEffect, useMemo, useState, useRef} from 'react';
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
    
    // let createComment;
    // let addLike;
    // let now_playing;
    // let track_art;
    // let track_name;
    // let track_artist;

    // let playpause_btn;
    // let next_btn;
    // let prev_btn;

    // let seek_slider;
    // let volume_slider;
    // let curr_time;
    // let total_duration;
    // let wave;
    // let randomIcon;
    // let curr_track;

    // let track_index = 0;
    // let isPlaying = false;
    // let isRandom = false;
    // let updateTimer;

    // state that stores track index
    // const [trackIndex, setTrackIndex] = useState(0)
    // const [currTrack, setCurrTrack] = useState({})
    // const [isPlaying, setIsPlaying] = useState(false)
    // const [currentSong, setCurrentSong] = useState({})


    // function loadTrack(track) {
    //     let song = new Audio(track);
    //     setCurrentSong(song);
    // }
    // loadTrack(track_index);


    // function loadTrack(track_index) {
    //     clearInterval(updateTimer);
    //     reset();
    //     currTrack.src = music_list[track_index].music;
    //     updateTimer = setInterval(setUpdate, 1000);
    //     curr_track.addEventListener('ended', nextTrack);
    // }

    // function reset() {
    //     curr_time.textContent = "00:00";
    //     total_duration.textContent = "00:00";
    //     seek_slider.value = 0;
    // }



    // function seekTo() {
    //     let seekto = curr_track.duration * (seek_slider.value / 100);
    //     curr_track.currentTime = seekto;
    // }
    // function setVolumeTo() {
    //     curr_track.volume = volume_slider.value / 100;
    // }
    // function setUpdate() {
    //     let seekPosition = 0;
    //     if (!isNaN(curr_track.duration)) {
    //         seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    //         seek_slider.value = seekPosition;

    //         let currentMinutes = Math.floor(curr_track.currentTime / 60);
    //         let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    //         let durationMinutes = Math.floor(curr_track.duration / 60);
    //         let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    //         if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    //         if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    //         if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    //         if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    //         curr_time.textContent = currentMinutes + ":" + currentSeconds;
    //         total_duration.textContent = durationMinutes + ":" + durationSeconds;
    //     }
    // }






    // function repeatTrack() {
    //     let current_index = track_index;
    //     loadTrack(current_index);
    //     playTrack();
    // }

    // function randomTrack() {
    //     isRandom ? pauseRandom() : playRandom();
    // }
    // function playRandom() {
    //     isRandom = true;
    //     randomIcon.classList.add('randomActive');
    // }
    // function pauseRandom() {
    //     isRandom = false;
    //     randomIcon.classList.remove('randomActive');
    // }
    
    // function playPauseTrack() {
    //     isPlaying ? pauseTrack() : playTrack();
    // }
    // function playTrack() {
    //     curr_track.play();
    //     isPlaying = true;
    //     playpause_btn.innerHTML = '<i class="fa-solid fa-circle-pause"></i>';
    // }
    // function pauseTrack() {
    //     curr_track.pause();
    //     isPlaying = false;
    //     playpause_btn.innerHTML = '<i class="fa-solid fa-circle-play"></i>';
    // }
    // function nextTrack() {
    //     if (track_index < music_list.length - 1 && isRandom === false) {
    //         track_index += 1;
    //     } else if (track_index < music_list.length - 1 && isRandom === true) {
    //         let random_index = Number.parseInt(Math.random() * music_list.length);
    //         track_index = random_index;
    //     } else {
    //         track_index = 0;
    //     }
    //     loadTrack(track_index);
    //     playTrack();
    // }
    // function prevTrack() {
    //     if (track_index > 0) {
    //         track_index -= 1;
    //     } else {
    //         track_index = music_list.length - 1;
    //     }
    //     loadTrack(track_index);
    //     playTrack();
    // }
   

    // state that stores track index
    const [songs, setSongs] = useState({musicList})
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentSong, setCurrentSong] = useState(musicList[0])

    const [trackIndex, setTrackIndex] = useState(0)
    const [currTrack, setCurrTrack] = useState({})

    useEffect(() => {
        setCurrTrack(musicList[trackIndex]);
        setCurrentSong(currTrack.audio);
    }, [trackIndex]) 
    
    function playPause(track) {
        if (!isPlaying) {
            //play(track);
        } else {
            //pause(track);
        }
    }

    // function play(song) {
    //     song.play()
    //     console.log(song)
    //     setIsPlaying(!isPlaying);
    //     console.log(isPlaying)
    // }

    // function pause(song) {
    //     song.pause()
    //     setIsPlaying(!isPlaying);
    //     console.log(isPlaying)
    // }

    const audioElem = useRef();

    return (
        //<audio src={track1}/>




        // <ReactPlayer
        //     url={musicList[0].audio}
        //     controls={true}
        // />

        <section id="music" className="player">
            <div className="border">
                <ul className="details">
                    <li className="nowPlaying">PLAYING TRACK {trackIndex + 1} OF {musicList.length}</li>
                    <li className="trackArt"><img src={currTrack.img} alt="album cover of track"/></li>
                    <li className="trackName">{currTrack.name}</li>
                    <li className="trackArtist">{currTrack.artist}</li>
                </ul>
                <ul className="sliderContainer">
                    <li className="currentTime">00:00</li>
                    <li><input type="range" min="1" max="100" value="0" className="seekSlider" 
                    //onchange={seekTo()} 
                    /></li>
                    <li className="totalDuration">00:00</li>
                </ul>
                <ul className="buttonsPlayer">
                    <li className="randomTrack" 
                    //onclick={randomTrack()}
                    >
                        <i className="fa-solid fa-shuffle" title="random"></i>
                    </li>
                    <li className="prevTrack" 
                    //onclick={prevTrack()}
                    >
                        <i className="fa-solid fa-backward-step"></i>
                    </li>
                    <li className="playPauseTrack" onClickCapture={() => { playPause(currentSong) }}>
                        <i className={isPlaying ? "fa-solid fa-circle-pause" : "fa-solid fa-circle-play"}></i>
                        <div>
                            <audio src={currentSong} ref={audioElem} controls autoPlay />
                        </div>
                    </li>
                    <li className="nextTrack" 
                    //onclick={nextTrack()}
                    >
                        <i className="fa-solid fa-forward-step"></i>
                    </li>
                    <li className="repeatTrack" 
                    // onclick={repeatTrack()}
                    >
                        <i className="fa-solid fa-repeat" title="repeat"></i>
                    </li>
                </ul>
                <ul className="sliderContainer">
                    <li><i className="fa-solid fa-volume-low"></i></li>
                    <li><input type="range" min="1" max="100" value="99" className="volumeSlider" //onchange={setVolumeTo()}
                    /></li>
                    <li><i className="fa-solid fa-volume-high"></i></li>
                    <li><i className="fa-solid fa-message" //onclick={createComment()}
                    ></i></li>
                    <li><i className="fa-solid fa-heart" //onclick={addLike()}
                    ></i></li>
                    <li><p className="likeNumber">0</p></li>
                </ul>
            </div>
        </section>
    )
}

export default Player;