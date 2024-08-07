"use client";
import React, { useState } from "react";

const CreateReelPage = () => {
  const [video, setVideo] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [monetize, setMonetize] = useState(false);

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setVideo(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log({
      video,
      title,
      description,
      monetize,
    });
  };

  return (
    <div className="min-h-screen bg-dark-1 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-dark-2 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-light-1">Create Reel</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
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
              className="mt-1 block w-full text-light-1 bg-dark-3 border border-dark-4 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
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
            className="w-full bg-primary-500 text-light-1 py-2 px-4 rounded-lg shadow-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateReelPage;
