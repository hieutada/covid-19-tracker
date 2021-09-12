import React from 'react';
import HorizontalCard from './components/HorizontalCard';
import VerticalCard from './components/VerticalCard';

function HighlightCard({ variant, title, number, sub, color }) {
  const props = { title, number, sub, color };

  return (
    <>
      {variant === 'vertical' ? (
        <VerticalCard {...props} />
      ) : (
        <HorizontalCard {...props} />
      )}
    </>
  );
}

export default HighlightCard;
