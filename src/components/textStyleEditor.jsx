import React, { useState } from 'react';

function TextStyleEditor() {
  const [textColor, setTextColor] = useState(false);
  const [textSize, setTextSize] = useState(false);

  const bold = (e) => {
    // e.target.style.color = 'red';
    console.log(e);
  };
  return (
    <section className="text-style-btn-wrap">
      <div className="text-style-wrap">
        <button
          type="button"
          className="style-text-size"
          onClick={() =>
            textSize === false ? setTextSize(true) : setTextSize(false)
          }
        >
          <span className="text-size">제목1</span>
          {textSize === true ? <TextSize></TextSize> : null}
        </button>
        <button
          type="button"
          className="style-color"
          onClick={() =>
            textColor === false ? setTextColor(true) : setTextColor(false)
          }
        >
          <span className="text-color"></span>
          {textColor === true ? <TextColor></TextColor> : null}
        </button>
        <button className="style-bold">
          <i className="fas fa-bold"></i>
        </button>
        <button className="style-italic">
          <i className="fas fa-italic"></i>
        </button>
        <button className="style-underline">
          <i className="fas fa-underline"></i>
        </button>
      </div>
      <div className="text-align-wrap">
        <button>
          <i className="fas fa-align-left"></i>
        </button>
        <button>
          <i className="fas fa-align-center"></i>
        </button>
        <button>
          <i className="fas fa-align-right"></i>
        </button>
        <button>
          <i className="fas fa-align-justify"></i>
        </button>
      </div>
    </section>
  );
}

const TextColor = () => {
  const color_black = {
    background: '#000000',
  };

  const color_dark_grey = {
    background: '#666666',
  };

  const color_grey = {
    background: '#9d9d9d',
  };

  const color_light_grey = {
    background: '#dddddd',
  };

  const color_white = {
    background: '#ffffff',
  };

  const color_red = {
    background: '#ff261b',
  };

  const color_dark_red = {
    background: '#af0e4a',
  };

  const color_dark_pink = {
    background: '#cd527f',
  };

  const color_pink = {
    background: '#ff809d',
  };

  const color_light_green = {
    background: '#a6bc00',
  };

  const color_green = {
    background: '#009a87',
  };

  const color_light_blue = {
    background: '#99cefa',
  };

  const color_blue = {
    background: '#006dd7',
  };

  const color_yellow = {
    background: '#f3c000',
  };

  const color_orange = {
    background: '#f89009',
  };

  return (
    <ul className="text-color-list">
      <li style={color_black}></li>
      <li style={color_dark_grey}></li>
      <li style={color_grey}></li>
      <li style={color_light_grey}></li>
      <li style={color_white}></li>
      <li style={color_red}></li>
      <li style={color_dark_red}></li>
      <li style={color_pink}></li>
      <li style={color_dark_pink}></li>
      <li style={color_light_green}></li>
      <li style={color_green}></li>
      <li style={color_light_blue}></li>
      <li style={color_blue}></li>
      <li style={color_yellow}></li>
      <li style={color_orange}></li>
    </ul>
  );
};

const TextSize = () => {
  const size_title_1 = {
    fontSize: '2.2rem',
    fontWeight: '700',
  };

  const size_title_2 = {
    fontSize: '1.8rem',
    fontWeight: '700',
  };

  const size_title_3 = {
    fontSize: '1.6rem',
    fontWeight: '600',
  };

  const size_contant_1 = {
    fontSize: '1.4rem',
    fontWeight: '400',
  };

  const size_contant_2 = {
    fontSize: '1rem',
    fontWeight: '400',
  };

  const size_contant_3 = {
    fontSize: '0.8rem',
    fontWeight: '400',
  };

  return (
    <ul className="text-size-list">
      <li style={size_title_1}>제목 1</li>
      <li style={size_title_2}>제목 2</li>
      <li style={size_title_3}>제목 3</li>
      <li style={size_contant_1}>본문 1</li>
      <li style={size_contant_2}>본문 2</li>
      <li style={size_contant_3}>본문 3</li>
    </ul>
  );
};

export default TextStyleEditor;
