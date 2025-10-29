"use client";

import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { resetPinRequest } from "@/store/account/accountSlice";
import { RootState } from "@/store/store";
import InlineLoader from "@/components/general/InlineLoader";

export default function ResetPin() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.account);

  const handleResetPin = () => {
    toast(
      (t) => (
        <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col gap-4 text-center">
          <p className="font-semibold text-lg">
            Do you really want to reset the pin?
          </p>
          <p className="text-sm text-gray-500">
            A new PIN will be sent to your registered email address.
          </p>
          <div className="flex justify-center gap-4 mt-2">
            <button
              className="px-6 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancel
            </button>
            <button
              className="px-6 py-2 bg-[#00A4B6] text-white rounded-md hover:bg-[#00A4B6] transition-colors"
              onClick={() => {
                dispatch(resetPinRequest());
                toast.dismiss(t.id);
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      ),
      {
        duration: 60000,
        style: {
          background: "transparent",
          boxShadow: "none",
          border: "none",
        },
      }
    );
  };

  return (
    <div className="max-w-[559px] mx-auto pt-10">
      <div className="bg-white rounded-[13px] px-4 md:px-10 pt-8 pb-8 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-[#4F4F4F]">
          Reset Your PIN
        </h2>
        <p className="text-gray-600 mb-8">
          If you have forgotten your PIN or wish to change it for security
          reasons, you can request a new one.
        </p>
        <button
          onClick={handleResetPin}
          className="w-full max-w-xs mx-auto bg-[#00A4B6] text-white py-3 rounded-lg hover:bg-[#0090a6] transition-colors flex items-center justify-center"
          disabled={loading}
        >
          {loading ? <InlineLoader /> : "Reset PIN"}
        </button>
      </div>
    </div>
  );
}