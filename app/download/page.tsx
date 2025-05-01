'use client';
import React, { useState, useEffect } from 'react';

const Download = () => {
  const [videoURL, setVideoURL] = useState('');

  useEffect(() => {
    const storedVideoURL = localStorage.getItem('uploadedVideoURL') || '';
    console.log('Loaded video URL:', storedVideoURL); // Add this line
    setVideoURL(storedVideoURL);
  }, []);
  

  return (
    <div className="flex justify-between h-90vh">
      <div className="flex-1 mr-5 justify-center items-center flex flex-col">
        <h1 className="text-5xl font-bold text-gray-500 mb-5">Welcome to the Download Page</h1>
        <ul className="mt-2 list-disc list-inside">
          <li>This is a description of the content available for download.</li>
          <li>Feel free to explore and download the resources provided.</li>
          <li className="text-red-500">The video here hasn't been edited at all.</li>
          <li className="text-red-500">It is the same video that was uploaded.</li>
        </ul>
      </div>
      <div className="flex-1 justify-center items-center flex flex-col p-5">
        {videoURL ? (
          <>
            <video
              src={videoURL}
              controls
              style={{ width: '600px', height: '400px' }}
            >
              Your browser does not support the video tag.
            </video>
            <a
              href={videoURL}
              download
              className="block mt-2 text-center"
            >
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Download
              </button>
            </a>
          </>
        ) : (
          <p className="text-gray-400">No video available to display.</p>
        )}
      </div>
    </div>
  );
};

export default Download;
