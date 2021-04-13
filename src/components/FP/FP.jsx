import {React,  useEffect} from 'react'
import './FP.css';
import avatar from '../../assets/avatar2.png';
import AOS from 'aos';

// /import 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css';


export default function FP() {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

      return (
<div id="first-page">
  <div className="container" id="avatar">
    <div className="row justify-content-center align-items-center">
      <div className="col-sm-5 col-md-5 col-lg-5 col-xl-4 offset-sm-0 text-center text-md-center"><img data-aos="zoom-in" data-aos-duration={800} src={avatar} /></div>
      <div className="col-sm-12 col-md-7 col-lg-7 col-xl-8 offset-sm-0 text-center">
        <div data-aos="fade-left" data-aos-duration={800} id="avatar-text">
          <div className="text-center float-none justify-content-xl-start">
            <h1>I'm&nbsp;</h1>
            <h1>web developer</h1>
          </div>
          <p className="text-justify" id="avater-des">Libero habitasse sollicitudin aliquet venenatis iaculis placerat amet ligula, eleifend nonummy enim in volutpat diam.<br /><br /></p>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}
