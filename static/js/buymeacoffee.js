// Direct script injection for Buy Me a Coffee widget
(function() {
  if (typeof window !== 'undefined') {
    // Wait for DOM to be ready
    function initWidget() {
      // Remove existing widget
      const existingWidget = document.querySelector('.bmc-btn-container');
      if (existingWidget) {
        existingWidget.remove();
      }

      // Check if we're on a docs page
      const isDocsPage = window.location.pathname.includes('/docs/');

      // Create script element
      const script = document.createElement('script');
      script.src = 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js';
      script.setAttribute('data-name', 'BMC-Widget');
      script.setAttribute('data-cfasync', 'false');
      script.setAttribute('data-id', 'l00pss');
      script.setAttribute('data-description', 'Support The8ArmsHub!');
      script.setAttribute('data-message', 'Help us create more quality content!');
      script.setAttribute('data-color', '#5F7FFF');

      if (isDocsPage) {
        // Position in upper right for docs pages
        script.setAttribute('data-position', 'Right');
        script.setAttribute('data-x_margin', '20');
        script.setAttribute('data-y_margin', '80'); // Higher up on the page
      } else {
        // Default position for other pages
        script.setAttribute('data-position', 'Right');
        script.setAttribute('data-x_margin', '18');
        script.setAttribute('data-y_margin', '18');
      }

      // Add custom styling for docs pages
      script.onload = function() {
        if (isDocsPage) {
          // Add custom styles to position the widget better in docs layout
          const style = document.createElement('style');
          style.textContent = `
            .bmc-btn-container {
              z-index: 1000 !important;
            }
            
            /* Position widget in docs sidebar area */
            @media (min-width: 997px) {
              .bmc-btn-container {
                position: fixed !important;
                top: 100px !important;
                right: 20px !important;
                z-index: 999 !important;
              }
            }
            
            /* Hide on mobile for docs pages */
            @media (max-width: 996px) {
              .bmc-btn-container {
                display: none !important;
              }
            }
          `;
          document.head.appendChild(style);
        }
        console.log('Buy Me a Coffee widget loaded for', isDocsPage ? 'docs page' : 'regular page');
      };

      script.onerror = function() {
        console.error('Failed to load Buy Me a Coffee widget');
      };

      // Add to document
      document.head.appendChild(script);
    }

    // Initialize immediately if DOM is ready, otherwise wait
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initWidget);
    } else {
      initWidget();
    }

    // Re-initialize on page navigation (for SPA behavior)
    let currentPath = window.location.pathname;
    const observer = new MutationObserver(function() {
      if (currentPath !== window.location.pathname) {
        currentPath = window.location.pathname;
        setTimeout(initWidget, 100); // Small delay to ensure page is ready
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }
})();

