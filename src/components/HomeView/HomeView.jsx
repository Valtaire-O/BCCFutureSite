import Sponsors from '../Sponsors/Sponsors'
import Carousel from '../Carousel/Carousel';
import './HomeView.css'
import AboutUsCard from '../AboutUs/AboutUsCard';
import backgroundImg from '../../assets/backgroundImg.svg'

function HomeView() {
    return ( 

        <main id="home_view">
            
            <img 
                src={backgroundImg}
                alt="logo" 
                className="background-img" 
            />
            <section className="intro-section">

                <h1>Baltimore's Best Tech Meetup</h1>
                <p>An inclusive, informal, co-working meetup for people of all skill levels. Bring a laptop and ideas, we'll bring coffee!</p>

            </section>
            <section className="carousel-section">
                <Carousel />
            </section>
            <section className="about-us">
                <AboutUsCard />
            </section>
            <section className="sponsor-section">
                <Sponsors />
            </section> 
        </main>

     );
}

export default HomeView;