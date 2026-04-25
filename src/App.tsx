import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-blue-50 font-sans">
      {/* Header */}
      <nav className="bg-blue-900 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Wisdom Vidyapeeth</h1>
        <a href="https://wa.me/91XXXXXXXXXX" className="bg-green-500 px-4 py-2 rounded">Contact WhatsApp</a>
      </nav>

      {/* Hero */}
      <header className="py-20 text-center bg-white">
        <h2 className="text-4xl font-extrabold text-blue-900">Welcome to Wisdom Vidyapeeth</h2>
        <p className="mt-4 text-gray-600">The premier educational institute in Begusarai, Bihar.</p>
      </header>

      {/* Notice Board */}
      <section className="p-8">
        <h3 className="text-2xl font-bold mb-4">Latest Notices</h3>
        <div className="bg-yellow-100 p-4 border-l-4 border-yellow-500">
          <p><strong>April 26:</strong> Admissions Open for 2026 Session!</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-10 text-center">
        <p>Wisdom Vidyapeeth | Begusarai, Bihar</p>
      </footer>
    </div>
  );
}
