import React from 'react';
import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Feature from './Feature';
import LandingPage from './LandingPage';
import FilterPage from './FilterPage';
import './index.css';

function Logo() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 20,
        left: 30,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        fontWeight: '900',
        fontSize: '1.6rem',
        userSelect: 'none',
        cursor: 'default',
        letterSpacing: '0.08em',
        fontStyle: 'italic',
        textShadow: '1px 1px 4px rgba(0,0,0,0.3)',
      }}
      aria-label="echo.ai logo"
    >
      <span style={{ color: '#800080' }}>echo</span>
      <span style={{ color: '#00aaff' }}>.ai</span>
    </div>
  );
}

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="container" style={{ position: 'relative' }}>
      <Logo />

      <section className="hero">
        <h1>Turn Complaints Into Companies — with echo.ai</h1>
        <p>
          Our AI continuously scans the latest posts and discussions on Reddit, Discord, and niche forums to surface real-time user frustrations.
          By prioritizing the most recent and relevant conversations, echo.ai helps you uncover pressing pain points before they go mainstream,
          delivering fresh, actionable insights that guide your startup ideas with confidence.
        </p>
        <button className="button" onClick={() => navigate('/proceed')}>
          Try It Now
        </button>
      </section>

      <section className="features">
        <Feature
          title="Scrape Real User Complaints in Real-Time"
          description="Our system monitors the newest threads and messages across Reddit, Discord, and specialized communities — so you catch what users are struggling with right now, not old trends."
        />
        <Feature
          title="Identify Market Gaps with Competitive Analysis"
          description="We cross-check your ideas against hundreds of startups and emerging products to reveal who’s solving what and where the biggest opportunities lie."
        />
        <Feature
          title="Get Detailed Differentiation Scores"
          description="Input your concept or website, and our AI generates a report analyzing overlap with competitors — so you know exactly how unique and valuable your idea is."
        />
      </section>

      <LandingPage />

      <section className="cta">
        <h2>AI-Powered Research for Founders & Builders</h2>
        <p>
          Stop guessing and build with data-driven confidence. Save hours on market research and get early alerts on emerging pain points — before your competitors do.
        </p>
      </section>

      <footer className="footer">
        &copy; {new Date().getFullYear()} echo.ai. All rights reserved.
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/proceed" element={<FilterPage />} />
      </Routes>
    </Router>
  );
}
