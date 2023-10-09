import React from 'react';
import './Image.css';
import clarenceImage from './clarence.jpg';

function Image() {
  return (
    <div className="image-container">
      <div className="text rotate">Clarence</div>
      <div className="image-content">
        <img src={clarenceImage} alt="" className="image" />
      </div>
      <div className="why-me">
        <h2 className="heading">Why Me</h2>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac justo nec leo fringilla mattis.
        </p>
        <div className="card-container">
          
          <div className="card">
            <h3 className="card-heading">Music Player</h3>
            <img src="https://th.bing.com/th/id/OIP.zQZ-TjExZv3YATJXX9tijQHaEf?pid=ImgDet&rs=1" alt="Card 1" className="card-image" style={{ maxWidth: '100%', maxHeight: '100%' }} /> 
            
            <p className="card-paragraph"></p>
          </div>

         
          <div className="card">
            <h3 className="card-heading">Music Player</h3>
            <img src="https://i.pinimg.com/originals/ab/59/11/ab59111e93d4632dcfdaf261555d76b0.jpg" alt="Card 2" className="card-image" style={{ maxWidth: '100%', maxHeight: '100%' }} /> 
            <p className="card-paragraph">
              
            </p>
          </div>

         
          <div className="card">
            <h3 className="card-heading">Login</h3>
            <img src="https://th.bing.com/th/id/OIP.lTe3lHMzBksgESp5MArleAHaHa?pid=ImgDet&rs=1" alt="Card 3" className="card-image" style={{ maxWidth: '100%', maxHeight: '100%' }} /> 
            <p className="card-paragraph"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Image;
