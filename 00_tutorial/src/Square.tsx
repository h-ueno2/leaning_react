import React from "react";

/**
 * Squareのprops
 */
type SquareProps = {
  value: string;
  onClick: () => void;
};

const Square = (props: SquareProps) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Square;
