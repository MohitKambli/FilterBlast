import React, { useState } from 'react';
import './App.css';
import LoadingDot from './LoadingDot';
import Image1 from './Images/LOFI.jpg';
import Image2 from './Images/MOON.jpg';
import Image3 from './Images/TOASTER.jpg';
import Image4 from './Images/KELVIN.jpg';

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [originalImage, setOriginalImage] = useState(null);
  const [originalImageUrl, setOriginalImageUrl] = useState(null);
  const [filteredImages, setFilteredImages] = useState([]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(null);
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [showCarousel, setShowCarousel] = useState(true);
  
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState('');
  const [imageName, setImageName] = useState('');

  const fetchAndProcess = async (file) => {
    setIsLoading(true);
    setIsInputDisabled(true);
    setShowCarousel(false);

    const formData = new FormData();
    formData.append('image', file);

    try {
      //const response = await fetch('https://mohitkambli.pythonanywhere.com/upload_image', {
      const response = await fetch('https://flask-hello-world-zeta-lilac-30.vercel.app/upload_image', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      setUploadedImage(data.uploaded_image_url);
      setOriginalImage(data.uploaded_image_url);
      setOriginalImageUrl(data.uploaded_image_url);
      setFilteredImages(data.filtered_images);
      setSelectedFilterIndex(null);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
      setIsInputDisabled(false);
    }
  }

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    fetchAndProcess(file);
  };

  const handleFilterImageClick = async (index) => {
    setIsLoading(true);
    setIsInputDisabled(true);
    setSelectedFilterIndex(index);
    try {
      const imageToFilter = originalImageUrl || uploadedImage;
      const response = await fetch('https://flask-hello-world-zeta-lilac-30.vercel.app/process_and_fetch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ uploaded_image_url: imageToFilter, selected_filter_index: index })
      });
      const data = await response.json();
      setUploadedImage(data.filtered_image_url);
    } catch (error) {
      console.error('Error applying filter:', error);
    } finally {
      setIsLoading(false);
      setIsInputDisabled(false);
    }
  };

  const handleDownload = () => {
    setShowModal(true);
  };

  const handleDownloadConfirm = async () => {
    if (uploadedImage) {
      setIsLoading(true);
      setIsInputDisabled(true);
      setShowModal(false);
      try {
        const response = await fetch(uploadedImage);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${imageName || 'filtered_image'}.jpg`);
        document.body.appendChild(link);
        link.click();
        link.remove();
        // After successful download, log the download event in the backend
            await fetch('https://flask-hello-world-zeta-lilac-30.vercel.app/log_download', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userName: userName,
                    imageName: imageName || 'filtered_image',
                    timestamp: new Date().toISOString(),
                }),
            });
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
        setIsInputDisabled(false);
        setUserName("");
        setImageName("");
      }
    }
  };

  return (
    <div className="container">
      <div className="div-heading-input">
        <h1 className="heading-style">FilterBlast{isLoading && <LoadingDot/>}</h1>
        <div className="div-file-input-label">
          <label htmlFor="file" className="file-input-label">
            <input type="file" id="file" accept="image/*" onChange={handleImageUpload} disabled={isInputDisabled} />
            Browse an Image
          </label>
        </div>
      </div>

      { showCarousel && (
        <div className="gallery">
          <img src={Image1} alt="Image1" />
          <img src={Image2} alt="Image2" />
          <img src={Image3} alt="Image3" />
          <img src={Image4} alt="Image4" />
        </div>
      )}

      <div className="image-row">
        {originalImage && <img src={originalImage} alt="Original" className="original-image" />}
        {uploadedImage && <img src={uploadedImage} alt="Uploaded" className="uploaded-image" />}
      </div>

      {uploadedImage && (
        <button onClick={!isLoading ? handleDownload : null} className="download-button">
          Download Filtered Image
        </button>
      )}

      <div className="filtered-images-container">
        {filteredImages.map((imageUrl, index) => (
          <div key={index} className="tooltip-container">
            <img
              src={imageUrl}
              alt={`Filtered ${index}`}
              className={`filtered-image ${index === selectedFilterIndex ? 'selected-filter' : ''}`}
              onClick={!isLoading ? () => handleFilterImageClick(index) : null}
            />
            <span className="tooltip-text">{['hudson', 'inkwell', 'kelvin', 'lark', 'lofi', 'moon', 'perpetua', 'toaster'][index]}</span>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Download Image</h2>
            <input
              type="text"
              placeholder="Your name*"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="modal-input"
              required
            />
            <input
              type="text"
              placeholder="Image name*"
              value={imageName}
              onChange={(e) => setImageName(e.target.value)}
              className="modal-input"
              required
            />
            <button onClick={handleDownloadConfirm} className="modal-button" disabled={!userName || !imageName}>Confirm</button>
            <button onClick={() => setShowModal(false)} className="modal-button">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );  
}

export default App;
