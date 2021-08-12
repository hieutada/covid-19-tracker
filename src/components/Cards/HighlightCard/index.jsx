import React from 'react';
import PropTypes from 'prop-types';
import VerticalCard from './components/VerticalCard';
import HorizontalCard from './components/HorizontalCard';

HighlightCard.propTypes = {};

function HighlightCard({ variant, title, number, sub, color }) {
  return (
    <>
      {variant === 'vertical' ? (
        <VerticalCard title={title} number={number} sub={sub} color={color} />
      ) : (
        <HorizontalCard title={title} number={number} sub={sub} color={color} />
      )}
    </>
  );
}

export default HighlightCard;
