import React from "react";
import { Tag } from "antd";
import { RelatedBar } from "./Related.style";

export const Related = () => {
  return (
    <RelatedBar>
      <span>Related: </span>
      <Tag className="edit-tag" key={"worldwide shipping"} onClose={() => ""}>
        <span> worldwide shipping </span>
      </Tag>

      <Tag className="edit-tag" key={"under $50"} onClose={() => ""}>
        <span> under $50 </span>
      </Tag>

      <Tag className="edit-tag" key={"kitten"} onClose={() => ""}>
        <span> kitten </span>
      </Tag>

      <Tag className="edit-tag" key={"plastic plugs"} onClose={() => ""}>
        <span> plastic plugs </span>
      </Tag>

      <Tag className="edit-tag" key={"pucker shoes"} onClose={() => ""}>
        <span> pucker shoes </span>
      </Tag>

      <Tag className="edit-tag" key={"vintage typewriter"} onClose={() => ""}>
        <span> vintage typewriter </span>
      </Tag>
    </RelatedBar>
  );
};
