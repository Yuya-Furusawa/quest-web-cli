import * as React from "react";

const NotInValidAreaMessage: React.FC = () => (
  <div className="flex justify-center">
    <p className="text-base text-center">
      チェックポイント外です。
      <br />
      目的地周辺まで移動してください。
    </p>
  </div>
);

export default NotInValidAreaMessage;
