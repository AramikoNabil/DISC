/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

const ResultPDF = React.forwardRef((props, ref) => {
  return <div ref={ref}>My cool content here!</div>;
});

export default ResultPDF;
