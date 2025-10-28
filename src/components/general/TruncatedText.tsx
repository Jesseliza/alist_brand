import React from 'react';

interface TruncatedTextProps {
  text: string | null;
  maxLength?: number;
  className?: string;
}

const TruncatedText: React.FC<TruncatedTextProps> = ({ text, maxLength = 20, className }) => {
  if (!text || text.length <= maxLength) {
    return <span className={className}>{text}</span>;
  }

  const truncatedText = `${text.substring(0, maxLength)}...`;

  return (
    <span className={`truncate w-full ${className}`} title={text ?? ''}>
      {truncatedText}
    </span>
  );
};

export default TruncatedText;
