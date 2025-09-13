
import React, { useState } from 'react';
import { ActiveTab } from './types';
import Header from './components/Header';
import Tabs from './components/Tabs';
import ImageProcessor from './components/ImageProcessor';
import VideoProcessor from './components/VideoProcessor';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>(ActiveTab.Image);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl mx-auto">
        <Header />
        <main className="mt-8">
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="mt-6 bg-gray-800 border border-gray-700 rounded-b-lg p-6 sm:p-8 shadow-2xl">
            {activeTab === ActiveTab.Image ? <ImageProcessor /> : <VideoProcessor />}
          </div>
        </main>
        <footer className="text-center mt-12 text-gray-500 text-sm">
          <p>Powered by Google Gemini</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
