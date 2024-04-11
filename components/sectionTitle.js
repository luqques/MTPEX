import React from "react";
import Container from "./container";

const SectionTitle = (props) => {
  return (
    <Container
      className={`flex w-full flex-col mt-4 ${props.align === "left" ? "" : "items-center justify-center text-center"
        }`}>
      {props.pretitle && (
        <div className="text-sm font-bold tracking-wider text-red-600 uppercase z-10">
          {props.pretitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight lg:leading-tight lg:text-4xl text-white z-10">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal lg:text-xl xl:text-xl text-gray-300 z-10">
          {props.children}
        </p>
      )}
    </Container>
  );
}

export default SectionTitle;
