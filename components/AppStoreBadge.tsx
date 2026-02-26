import React from 'react';

interface AppStoreBadgeProps {
  url: string;
  className?: string;
  height?: number;
}

const AppStoreBadge: React.FC<AppStoreBadgeProps> = ({ url, className = '', height = 54 }) => {
  const width = Math.round(height * (120 / 40));

  return (
    <a href={url} className={`inline-block ${className}`} aria-label="Download on the App Store">
      <img
        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
        alt="Download on the App Store"
        style={{ height, width }}
        className="hover:opacity-80 transition-opacity"
      />
    </a>
  );
};

export default AppStoreBadge;
