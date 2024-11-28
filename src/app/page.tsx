import React from 'react';

const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white">
      <div className="text-center max-w-lg px-4">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to kaso.dk
        </h1>
        <p className="text-lg">
          This domain is currently parked. Stay tuned for something amazing!
        </p>
      </div>
    </main>
  );
};

export default Home;
