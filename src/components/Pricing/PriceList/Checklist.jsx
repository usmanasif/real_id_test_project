import React from "react";

const Checklist = (props) => {
  const { checkPoints } = props;

  return (
    <ul className="checklist">
      {checkPoints?.map((point, index) => {
        return <li dangerouslySetInnerHTML={{ __html: point }} key={index}></li>
      })}
    </ul>
  );
};

export default Checklist;
