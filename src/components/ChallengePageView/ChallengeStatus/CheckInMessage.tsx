import * as React from "react";

type Props = {
  onClickCheckInButton: () => void;
};

const CheckInMessage: React.FC<Props> = React.memo(
  ({ onClickCheckInButton }) => (
    <div className="flex justify-center cursor-pointer">
      <button
        onClick={onClickCheckInButton}
        className="w-max py-2 px-4 text-white font-semibold rounded-lg bg-sky-500 hover:bg-sky-600"
      >
        チェックイン
      </button>
    </div>
  )
);

CheckInMessage.displayName = "CheckInMessage";

export default CheckInMessage;
