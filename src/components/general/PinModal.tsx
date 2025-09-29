"use client";

import { useState, useEffect } from "react";

interface PinModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (pin: string) => void;
  loading: boolean;
  error: string | null;
}

export default function PinModal({ isOpen, onClose, onSubmit, loading, error }: PinModalProps) {
  const [pin, setPin] = useState("");

  useEffect(() => {
    if (isOpen) {
      setPin(""); // Clear the pin when the modal opens
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(pin);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4">Pin Validation</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
            placeholder="Enter PIN"
          />
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400"
            >
              {loading ? "Validating..." : "Validate"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
