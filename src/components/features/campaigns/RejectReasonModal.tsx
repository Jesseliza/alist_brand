"use client";

import { useState } from 'react';

interface RejectReasonModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (reason: string) => void;
  loading: boolean;
}

const RejectReasonModal = ({ isOpen, onClose, onSubmit, loading }: RejectReasonModalProps) => {
  const [reason, setReason] = useState('');

  if (!isOpen) {
    return null;
  }

  const handleSubmit = () => {
    onSubmit(reason);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#00A4B6] p-4 flex justify-between items-center rounded-t-lg">
          <h3 className="text-xl font-semibold text-white">Reject Reason</h3>
          <button onClick={onClose} className="text-white text-2xl">&times;</button>
        </div>
        <div className="p-6">
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter reason for rejection"
            rows={4}
          />
          <div className="flex justify-end gap-2 mt-4">
            <button
              onClick={onClose}
              disabled={loading}
              className="px-4 py-2 bg-gray-200 rounded-md disabled:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={loading || !reason}
              className="px-4 py-2 bg-red-500 text-white rounded-md disabled:bg-gray-400 hover:bg-red-600"
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RejectReasonModal;