const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="wrapper">
                <h2>Contact</h2>
                <form action="https://formsubmit.co/anjalee.benedict@gmail.com" method="POST">
                    <label htmlFor="name" className="sr-only">Your Name</label>
                    <input id="name" type="text" placeholder="Your Name" className="text" required/>
                    <label htmlFor="email" className="sr-only">Your Email</label>
                    <input id="email" type="email" placeholder="Your Email" className="text" required/>
                    <label htmlFor="subject" className="sr-only">Subject</label>
                    <input id="subject" type="text" placeholder="Subject" className="message" required/>
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea id="message" name="message" cols="30" rows="10" className="message" placeholder="Message" required></textarea>
                    <div className="stackingOrder">
                        <button className="button">Send Message</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;