import React from 'react';
import './style.scss';


const Box = ({info="box title", imageSrc}) => {
  return (
    <div className="c-list_box">
      <span className="c-list_box_info">{info}</span>
      <span className="c-list_box_image"></span>
    </div>
  )
};

const AllProjects = () => {
  return (
    <main className="c-ap o-container" data-scroll-section="">
      <div className="c-list">
        <div className="c-list_title">
          <h2>List title</h2>
        </div>
        <div className="c-list_boxes-container">
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
        </div>
      </div>
    </main>
  )
};

export default AllProjects;
