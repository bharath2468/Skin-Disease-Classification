import React, { useState, useRef } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [imageSrc, setImageSrc] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

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
    try {
      const response = await axios.post('http://15.206.212.49:8080/predict', {
        image: base64Image
      });
      setResult(response.data);
    } catch (error) {
      console.error('Error during prediction:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
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
              <h4 key={index} style={{ marginLeft: '10px' }}>{item.image}</h4>
            ))}
          </h2>
        </div>
      )}
    </div>
  );
}

export default App;
