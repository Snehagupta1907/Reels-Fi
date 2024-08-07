"use client";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

const CreateReelPage = () => {
  const [video, setVideo] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [monetize, setMonetize] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'video/*': []  
    },
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        setVideo(acceptedFiles[0]);
      }
    }
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      video,
      title,
      description,
      monetize,
    });
  };

  return (
    <div className="min-h-screen bg-dark-3 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-dark-2 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-light-1">Create Reel</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center justify-center w-full">
            <div
              {...getRootProps()}
              className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-dark-3 hover:bg-dark-4"
            >
              <input {...getInputProps()} className="hidden" />
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-light-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-light-2">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-light-2">
                  Video files only (MAX. 10MB)
                </p>
              </div>
              {video && (
                <div className="mt-2 text-light-2">
                  <span className="font-semibold">Selected File:</span> {video.name}
                </div>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-light-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="mt-1 block w-full text-light-1 bg-dark-3 border border-dark-4 rounded-lg py-1 shadow-sm focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-light-2"
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              required
              className="mt-1 block w-full text-light-1 bg-dark-3 border border-dark-4 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="monetize"
              checked={monetize}
              onChange={() => setMonetize(!monetize)}
              className="h-4 w-4 text-primary-500 border-dark-4 rounded focus:ring-primary-500"
            />
            <label
              htmlFor="monetize"
              className="text-sm font-medium text-light-2"
            >
              Monetize
            </label>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-4 px-4 border border-transparent shadow-sm text-sm  text-dark-1 font-semibold bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateReelPage;
