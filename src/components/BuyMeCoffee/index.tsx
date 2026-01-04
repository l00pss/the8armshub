import { useEffect } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default function BuyMeCoffeeWidget(): null {
  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      // Remove existing scripts first
      const existingScripts = document.querySelectorAll('script[data-name="BMC-Widget"]');
      existingScripts.forEach(script => script.remove());

      // Create and load the Buy Me a Coffee widget script
      const script = document.createElement('script');
      script.src = 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js';
      script.setAttribute('data-name', 'BMC-Widget');
      script.setAttribute('data-cfasync', 'false');
      script.setAttribute('data-id', 'l00pss');
      script.setAttribute('data-description', 'Support me on Buy me a coffee!');
      script.setAttribute('data-message', '');
      script.setAttribute('data-color', '#5F7FFF');
      script.setAttribute('data-position', 'Right');
      script.setAttribute('data-x_margin', '18');
      script.setAttribute('data-y_margin', '18');
      script.async = true;

      // Add onload callback to ensure script loads
      script.onload = () => {
        console.log('Buy Me a Coffee widget loaded successfully');
      };

      script.onerror = () => {
        console.error('Failed to load Buy Me a Coffee widget');
      };

      document.head.appendChild(script);

      // Cleanup function
      return () => {
        const scriptToRemove = document.querySelector('script[data-name="BMC-Widget"]');
        if (scriptToRemove) {
          scriptToRemove.remove();
        }
      };
    }
  }, []);

  return null;
}
