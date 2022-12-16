import meter1 from "../assets/img/UnityLogo.svg";
import meter2 from "../assets/img/CLogo.svg";
import meter3 from "../assets/img/Python.svg";
import meter4 from "../assets/img/nav-icon2.svg";
import meter5 from "../assets/img/sql.svg";
import meter6 from "../assets/img/tableau.svg";
import meter7 from "../assets/img/linux.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2 style={{"marginBottom" : '5rem'}}>Skills</h2>
                        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p> */}
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" style={{filter:"invert(100)"}}/>
                                <h5>Unity3D</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>C#</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" style={{filter:"invert(100)"}} />
                                <h5>Git/Github</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" style={{filter:"invert(100)"}}/>
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>Tableau</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>Linux</h5>
                            </div>
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
