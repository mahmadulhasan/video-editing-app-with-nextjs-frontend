'use client';

import React, { useState, useEffect } from 'react';
import Timeline from './timeline/timeline';
import CanvasVideoEditor from './canvasvideoeditor';
import AudioTimelineDemo from './audio/audio';

export default function VideoEditorLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState<'text' | 'image' | null>(null);
  const [textValue, setTextValue] = useState('');
  const [imageDataURL, setImageDataURL] = useState<string | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    const savedText = localStorage.getItem('savedText');
    const savedImage = localStorage.getItem('savedImage');
    if (savedText) setTextValue(savedText);
    if (savedImage) setImageDataURL(savedImage);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('savedText', textValue);
  }, [textValue]);

  useEffect(() => {
    if (imageDataURL) {
      localStorage.setItem('savedImage', imageDataURL);
    }
  }, [imageDataURL]);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              type="button"
              className="inline-flex items-center p-2 mr-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700"
            >
              <span className="sr-only">Toggle sidebar</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M2 4.5A1.5 1.5 0 013.5 3h13a1.5 1.5 0 010 3h-13A1.5 1.5 0 012 4.5zM2 10a1.5 1.5 0 011.5-1.5h13a1.5 1.5 0 110 3h-13A1.5 1.5 0 012 10zm1.5 4.5a1.5 1.5 0 000 3h13a1.5 1.5 0 100-3h-13z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <span className="text-xl font-semibold dark:text-white">Video Editor</span>
          </div>

          <div>
            <a href="/download">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
              Export
            </button>
            </a>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-30 h-screen pt-20 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 transition-transform transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                onClick={() => setSelectedTool('text')}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="ml-3 icon">
                  <img src="/images/textlogo.jpg" alt="Text Logo" />
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setSelectedTool('image')}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="ml-3 icon">
                  <img src="/images/image.png" alt="Image Logo" />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main content */}
      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14">
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="flex items-center justify-center h-100 bg-gray-50 dark:bg-gray-800 rounded-sm col-span-1 p-2">
              {selectedTool === 'text' && (
                <textarea
                  className="w-full h-full p-2 border border-gray-300 rounded-sm dark:bg-gray-700 dark:text-white"
                  placeholder="Enter your text here..."
                  value={textValue}
                  onChange={(e) => setTextValue(e.target.value)}
                />
              )}

              {selectedTool === 'image' && (
                <div className="flex flex-col items-center justify-center w-full">
                  <input
                    type="file"
                    accept="image/*"
                    className="mb-2 border border-gray-300 rounded-sm dark:bg-gray-700 dark:text-white p-4"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = (event) => {
                          if (event.target?.result) {
                            setImageDataURL(event.target.result as string);
                          }
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                  {imageDataURL && (
                    <img src={imageDataURL} className="mt-2 max-w-full max-h-48 rounded-sm" />
                  )}
                </div>
              )}
            </div>

            <div className="relative flex items-center justify-center h-100 bg-gray-50 dark:bg-gray-800 rounded-sm col-span-3">
              <div className="relative w-full h-full">
                <video
                  src={localStorage.getItem('uploadedVideoURL') || ''}
                  controls
                  className="w-full h-full object-contain"
                >
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0">
                  <CanvasVideoEditor
                    imageDataURL={imageDataURL}
                    textValue={textValue}
                    style={{ position: 'absolute', cursor: 'move' }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center h-48 bg-gray-50 dark:bg-gray-800 rounded-sm">
            {/* <Timeline /> */}
            <ul className="list-disc list-inside bg-red-500 dark:text-white p-5">
                {/* <li>Could not create the timeline for the video.</li>
                <li>The audio timeline is not functioning as expected.</li>
                <li>The video render canvas is not as realistic as it should be.</li>
                <li>Failed to find resources for studying the required functionality.</li> */}
            </ul>
          </div>

          <br />

          <div className="flex items-center justify-center h-48 bg-gray-50 dark:bg-gray-800 rounded-sm">
            <AudioTimelineDemo />
          </div>
        </div>
      </div>
    </>
  );
}
