import * as React from "react";

type Props = {
  size: string;
};

const Spacer: React.FC<Props> = ({ size }) => {
  const style = {
    width: `${size}`,
    minWidth: `${size}`,
    height: `${size}`,
    minHeight: `${size}`,
  };

  return <div style={style} />;
};

export default Spacer;
