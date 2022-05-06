import React from "react";
import { data } from "../utils";

import { FixedSizeGrid } from "react-window";

const columnCount = 3;
const rowCount = Math.ceil(data.length / columnCount);

export const Grid = () => {
  const Cell = ({ columnIndex, rowIndex, style }) => {
    const dataIndex = rowIndex * columnCount + columnIndex;

    if (dataIndex >= data.length) return null;

    const { title } = data[dataIndex];

    return (
      <div key={dataIndex} style={style} className="post">
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
      <FixedSizeGrid
        columnCount={columnCount}
        rowCount={rowCount}
        columnWidth={200}
        rowHeight={100}
        height={290}
        width={700}
      >
        {Cell}
      </FixedSizeGrid>
    </div>
  );
};
