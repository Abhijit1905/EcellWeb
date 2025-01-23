import './App.css';

export default function Second() {
    return (
        <section className="homepage">
            <div className="bigcontainer ">
                <div className='circleimg'><img src='circle.png'></img></div>
                <div className="triangleimg"><img src='triangle.png'></img></div>
                <div className='squareimg'><img src='square.png'></img></div>
                <div className="heading text-center mb-16">
                    <p>Squid Game</p>
                    <h1>Lets Dive in</h1>
                </div>
                <div className="flex intro gap-9 justify-center align-center">
                    <div className='circle'><img src='abhijit.png'></img></div>
                    <div className='introo flex-col text-center'>
                        <h3>Abhijit Sahu</h3>
                        <h3>Frontend Developer</h3>
                        <h3>20236005</h3>
                        <a href='https://www.instagram.com/abhijit_19_sahu/'>Instagram</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

