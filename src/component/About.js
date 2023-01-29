import profilePic from '../assets/techivation-unsplash.jpg'

const About = () => {
    return (
        <section id="about" className="about">
            <div className="wrapper aboutFlex">
                <div className="aboutText">
                    <h2>About 6Town</h2>
                    <p>6Town is a rising music producer based in Toronto. With a strong passion for music production, 6Town has been working diligently to develop and hone their skills. With a background in classical music, a love for indie and alternative pop, and experience producing rap beats, they want to combine all these different genres to craft a unique sound. Their style is characterized by its melodic elements and hard-hitting beats, which creates a one-of-a-kind listening experience. 6Town is excited to work with upcoming artists and help them bring their music visions to life. If you're an artist looking for a fresh and innovative producer to collaborate with, look no further than 6Town. Contact them today to discuss your next project!</p>
                </div>
                <div className="aboutPic">
                    <img src={profilePic} alt="6 Town Productions logo" />
                </div>
            </div>
        </section>
    )
}

export default About;