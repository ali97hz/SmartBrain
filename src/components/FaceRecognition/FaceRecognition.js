import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'> //margin top 2 baraye yekam fasele ba input
      	//mikhaym size image farqi nakone va hamishe width 500px bashe va hamzaman 
      	//nmikhaym ke tasviro kharab konim wrap she o ina pas heigh ro auto mizarim
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
        <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      </div>
    </div>
  );
}

export default FaceRecognition;