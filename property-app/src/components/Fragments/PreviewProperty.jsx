// import React from 'react';
import React, { useRef, useEffect } from 'react';

function PreviewProperty() {

function MyCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // 1. Ambil elemen canvas dari ref
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // 2. Mulai menggambar
    ctx.fillStyle = 'green';
    ctx.fillRect(20, 20, 150, 100);
    
    // ctx.fillStyle = 'white';
    // ctx.font = '20px Arial';
    // ctx.fillText("Halo React!", 35, 75);
    
  }, []); // Array kosong berarti hanya dijalankan sekali saat mount

  return (
    <canvas 
      ref={canvasRef} 
      width={1080} 
      height={1350} 
      // style={{ display :'none'}}
    />
  );
}
  
    
  return (

    <div className=''>PreviewPropertyComponent
    <MyCanvas/>
  

    </div>
  )
}

export default PreviewProperty