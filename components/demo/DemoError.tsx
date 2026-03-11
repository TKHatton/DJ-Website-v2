import React from 'react';

interface DemoErrorProps {
  message: string;
  onRetry: () => void;
}

const DemoError: React.FC<DemoErrorProps> = ({ message, onRetry }) => (
  <div className="max-w-xl mx-auto text-center animate-reveal" role="alert">
    <div className="bg-white rounded-[40px] border border-terracotta/20 p-12">
      <h3 className="font-accent font-bold text-2xl mb-4 text-terracotta">
        Something went wrong
      </h3>
      <p className="text-charcoal/60 mb-2">{message}</p>
      <p className="text-charcoal/40 text-sm mb-8">
        This does not count toward your demo limit.
      </p>
      <button
        onClick={onRetry}
        className="bg-charcoal text-cream px-8 py-3 rounded-full font-semibold hover:bg-terracotta transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
      >
        Try again
      </button>
    </div>
  </div>
);

export default DemoError;
