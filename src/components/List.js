import React from "react";
import { FixedSizeList } from "react-window";

import { data } from "../utils";

const itemCount = data.length;

export const List = () => {
  const Row = ({ index, style }) => {
    const { title } = data[index];

    return (
      <div key={index} style={style} className="post">
        <div
          style={{
            border: "1px solid blue",
            padding: "5px",
            margin: "5px",
            height: "70px"
          }}
        >
          <span>{`${title}`}</span>
        </div>
      </div>
    );
  };

  return (
    <div style={{ border: "2px solid red", padding: "5px" }}>
      <FixedSizeList
        itemCount={itemCount}
        itemSize={100}
        height={290}
        width={200}
      >
        {Row}
      </FixedSizeList>
    </div>
  );
};
