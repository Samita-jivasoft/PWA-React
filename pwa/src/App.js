import React, { useState } from 'react';
import { getAppEnvironment } from './getPWADisplayMode';
import './App.css';

function App() {
  const [userAgentInfo, setUserAgentInfo] = useState(null);

  const handleShowUserAgent = () => {
    const environment = getAppEnvironment();
    const isAndroidAppReferrer = document.referrer.startsWith('android-app://');

    const userAgentData = {
      userAgent: navigator.userAgent,
      environment,
      standalone: window.navigator.standalone || false,
      displayMode: window.matchMedia('(display-mode: standalone)').matches
        ? 'standalone'
        : window.matchMedia('(display-mode: fullscreen)').matches
        ? 'fullscreen'
        : window.matchMedia('(display-mode: minimal-ui)').matches
        ? 'minimal-ui'
        : 'browser',
      referrer: document.referrer,
      isAndroidAppReferrer, 
    };

    setUserAgentInfo(userAgentData);
  };

  return (
    <div className="App">
      <header>
        <h1>PWA Test Application</h1>
      </header>

      {/* Trigger button to show user agent */}
      <button onClick={handleShowUserAgent} style={{ margin: '20px', padding: '10px 20px' }}>
        Show User Agent Info
      </button>

      {/* Display user agent info */}
      {userAgentInfo && (
        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ddd' }}>
          <h2>User Agent Info:</h2>
          <pre style={{ background: '#f9f9f9', padding: '10px', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
            {JSON.stringify(userAgentInfo, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default App;
