'use client';

import { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';

export default function UploadPage() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setUploadedFile(file);
      setPreviewURL(URL.createObjectURL(file)); // generate preview URL
      simulateUpload();
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'video/*': [],
    },
    multiple: false,
  });

  const simulateUpload = () => {
    setIsUploading(true);
    setProgress(0);
    let progressValue = 0;
    const interval = setInterval(() => {
      progressValue += 10;
      if (progressValue >= 100) {
        clearInterval(interval);
        setIsUploading(false);
        toast.success('Upload Complete!', {
          description: uploadedFile?.name || 'Unknown file',
        });
      }
      setProgress(progressValue);
    }, 200);
  };

  const handleEditRedirect = () => {
    if (uploadedFile) {
      const videoURL = URL.createObjectURL(uploadedFile);
      localStorage.setItem('uploadedVideoURL', videoURL);
      router.push('/edit');
    }
  };
  

  useEffect(() => {
    return () => {
      if (previewURL) URL.revokeObjectURL(previewURL);
    };
  }, [previewURL]);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-xl p-10 w-full max-w-xl text-center cursor-pointer transition ${
          isDragActive ? 'border-blue-500 bg-blue-50' : 'border-blue-300'
        }`}
      >
        <input {...getInputProps()} />
        <p className="text-3xl font-bold mb-6">Upload Your Video</p>
        <p className="text-lg">Drag and drop a video file here, or click to select a file</p>
      </div>

      {uploadedFile && (
        <div className="mt-6 w-full max-w-xl">
          <h2 className="text-lg font-semibold mb-2">Selected Video:</h2>
          <div className="flex items-center justify-between bg-gray-100 rounded-lg p-4">
            <span>{uploadedFile.name}</span>
            <Button variant="secondary" onClick={() => {
              setUploadedFile(null);
              setPreviewURL(null);
              setProgress(0);
            }}>Remove</Button>
          </div>

          {isUploading && (
            <div className="mt-4">
              <Progress value={progress} />
              <p className="text-center mt-2">{progress}%</p>
            </div>
          )}

          {!isUploading && progress === 100 && previewURL && (
            <>
              <video
                src={previewURL}
                controls
                className="mt-4 rounded-lg shadow-md w-full max-h-[400px]"
              />
              <div className="mt-4 text-center">
                <Button className='bg-amber-600' onClick={handleEditRedirect}>Go to Edit Page</Button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
