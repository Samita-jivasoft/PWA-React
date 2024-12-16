export function getAppEnvironment() {
    console.log("Inside get app environment")
    const isStandalone = window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches;
    const isFullscreen = window.matchMedia('(display-mode: fullscreen)').matches;
    const isMinimalUI = window.matchMedia('(display-mode: minimal-ui)').matches;
    const userAgent = navigator.userAgent;
    console.log("The userAgent", userAgent)
    
    if (isStandalone || isFullscreen|| isMinimalUI) {
      return 'Installed PWA';
    }

    // Check if the app is running as a native app (Android WebView or iOS WebView)
    // if (/Android/i.test(userAgent) && (userAgent.includes('wv') || userAgent.includes('WebView'))) {
    //   return 'Native App (Android)';
    // } else if (/iPhone|iPad|iPod/i.test(userAgent) && !window.navigator.standalone) {
    //   return 'Native App (iOS)';
    // }
    return 'Browser';
  }
  
  // Log the app environment after DOM is loaded
  function initializePWADetection() {
    const appEnvironment = getAppEnvironment();
    console.log('APP_ENVIRONMENT:', appEnvironment);
  }
  
  // Run detection on DOMContentLoaded
  window.addEventListener('DOMContentLoaded', initializePWADetection);
  