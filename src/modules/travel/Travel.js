import React from 'react';
import Gallery from "react-photo-gallery";
import './travel.css';

import Navbar from "../navbar/Navbar";

const photos = [
  {
    src: "./images/NY.jpg",
    width: 4,
    height: 3
  },
  {
    src: "./images/time.jpg",
    width: 1,
    height: 1
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/XiDA78wAZVw/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/x8xJpClTvR0/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/qGQNmBE7mYw/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/NuO6iTBkHxE/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/A-fubu9QJxE/800x533",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/5P91SF0zNsI/740x494",
    width: 4,
    height: 3
  }
];



class Travel extends React.Component {
  render() {
    return (

      <div>

        <div class="snow">&nbsp;</div>
        <div class="snow2">&nbsp;</div>
        <div class="fill">
          <Navbar />

          <Gallery photos={photos} direction={"column"} />


        </div>
      </div>

    );
  }
}

export default Travel;