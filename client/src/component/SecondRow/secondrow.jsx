import React from "react";
import { TabsOne, TabsTwo } from "./tabs";
import "../../css/secondrow.css";
function SecondRow() {
  return (
    <>
      <div className="row mt-3">
        <div className="col-md-4">
          <TabsOne />
        </div>
        <div
          className="col-md-8"
          style={{
            height: "700px",
            overflow: "scroll",
          }}
        >
          <TabsTwo />
        </div>
      </div>
    </>
  );
}

export default SecondRow;
