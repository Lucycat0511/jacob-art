"use client";

import ImageContainer from "./ImageContainer";

export default function Gallery(props) {
  return (
    <>
      <div className="flex flex-col">
        <div className="grid grid-cols-2 grid-flow-row gap-24 ">
          {props.images.map((img, index) => {
            return <ImageContainer key={index} img={img} />;
          })}
        </div>
      </div>
    </>
  );
}
