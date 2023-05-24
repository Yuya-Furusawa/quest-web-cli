import * as React from "react";

type Props = {
  size: string;
};

const Spacer: React.FC<Props> = React.memo(({ size }) => {
  const style = {
    width: `${size}`,
    minWidth: `${size}`,
    height: `${size}`,
    minHeight: `${size}`,
  };

  return <div style={style} />;
});

Spacer.displayName = "Spacer";

export default Spacer;
