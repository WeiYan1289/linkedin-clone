import React from 'react';
import "./Widgets.css";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className='widgets'>
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("React Practices", "Top news - 9099 readers")}
      {newsArticle("Coronavirus: Malaysia updates", "Top news - 1413 readers")}
      {newsArticle("Tesla hits new highs", "Top news - 886 readers")}
      {newsArticle("Bitcoin Breaks $22k", "Top news - 777 readers")}
      {newsArticle("Is Redux too good?", "Top news - 585 readers")}
      {newsArticle("Big Data era", "Top news - 123 readers")}
    </div>
  )
}

export default Widgets
