import React, { useState, useRef } from 'react';
import axios from 'axios';
import './App.css';
import CellulitisInfo from './details/cellulitis.js';
import AltheleteFootInfo from './details/athlete_foot.js';
import ImpetigoInfo from './details/impetigo.js';
import ChickenPoxInfo from './details/chickenpox.js';
import NailFungusInfo from './details/nail_fungus.js';
import LarvaInfo from './details/larva_migrans.js';
import RingWormInfo from './details/ringworm.js';
import ShinglesInfo from './details/shingles.js';
function App() {
  const [imageSrc, setImageSrc] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);
  const detailsRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log('Selected file:', file);
    if (file && file instanceof Blob) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      console.error("Selected file is not valid or is not a Blob.");
    }
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageSrc) return;

    setLoading(true);
    const base64Image = imageSrc.split(',')[1]; // Extract base64 string without the data URL prefix
    const AWS_url = 'http://13.202.18.169:8080/predict';
    const local_host = 'http://localhost:8080/predict';
    try {
      const response = await axios.post(local_host, {
        image: base64Image
      });
      setResult(response.data);
      console.log(response.data[0]['image'])
    } catch (error) {
      console.error('Error connecting localHost:', error);
      try {
      const response = await axios.post(AWS_url, {
        image: base64Image
      });
      console.log('Response from AWS:', response.data);
      setResult(response.data);
    } catch (AWSError) {
      console.error('Error connecting AWS:', AWSError);
    }
    } finally {
      setLoading(false);
      if (detailsRef.current) {
        detailsRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center'  // Align the top of the element to the top of the scrollable area
      });
      }
    }
  };

  return (<div>
    <div className='part1'>
    <div className="App">
      <h1 className='heading'>Skin Disease Classification</h1>
      <form className='main' onSubmit={handleSubmit}>
        <input className="upload" type="file" accept="image/*" id="file-upload" ref={fileInputRef} onChange={handleImageChange} style={{ display: 'none' }}/>
        <img src={imageSrc || "/upload.jpg"} alt="Upload" className="upload-trigger" onClick={handleClick}/>
        <button className='predict' type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Predict'}
        </button>
      </form>
      {result && (
        <div>
          <h2 style={{ display: 'flex', alignItems: 'center' }}>
            Prediction Result: {result.map((item, index) => (
              <p key={index} style={{ marginLeft: '10px' }}>{item.image}</p>
            ))}
          </h2>
        </div>
      )}
    </div>
    </div>
    <div className='details' ref={detailsRef}>
      {result && result[0].image === 'Cellulitis' ? <CellulitisInfo /> : null}
      {result && result[0].image === 'Athlete-Foot' ? <AltheleteFootInfo /> : null}
      {result && result[0].image === 'Impetigo' ? <ImpetigoInfo /> : null}
      {result && result[0].image === 'Chickenpox' ? <ChickenPoxInfo /> : null}
      {result && result[0].image === "Cutaneous Larva Migrans" ? <LarvaInfo /> : null}
      {result && result[0].image === 'Nail-Fungus' ? <NailFungusInfo /> : null}
      {result && result[0].image === 'Ringworm' ? <RingWormInfo /> : null}
      {result && result[0].image === 'Shingles' ? <ShinglesInfo /> : null}
    </div>
  </div>
      );
}

export default App;
