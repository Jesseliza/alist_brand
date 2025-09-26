"use client";

import { useState, useEffect, useCallback } from "react";
import api from "@/services/apiHelper";
import InlineLoader from "@/components/general/InlineLoader";

interface BrandFile {
  id: number;
  venue_file_url: string;
  created_at: string;
  uploaded_by: string;
}

interface BrandFilesModalProps {
  isOpen: boolean;
  onClose: () => void;
  brandId: string | null;
}

const BrandFilesModal = ({ isOpen, onClose, brandId }: BrandFilesModalProps) => {
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [createdBy, setCreatedBy] = useState("");
  const [brandFiles, setBrandFiles] = useState<BrandFile[]>([]);
  const [uploading, setUploading] = useState(false);
  const [loadingFiles, setLoadingFiles] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBrandFiles = useCallback(async () => {
    if (!brandId) return;
    setLoadingFiles(true);
    setError(null);
    try {
      const response = await api.get(`/api/venue/${brandId}`);
      if (response.data && response.data.Venue && response.data.Venue.venue_files) {
        setBrandFiles(response.data.Venue.venue_files);
      }
    } catch (err) {
      setError("Failed to fetch brand files.");
    } finally {
      setLoadingFiles(false);
    }
  }, [brandId]);

  useEffect(() => {
    if (isOpen && brandId) {
      fetchBrandFiles();
    }
  }, [isOpen, brandId, fetchBrandFiles]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles(Array.from(event.target.files));
    }
  };

  const resetForm = () => {
    setFiles([]);
    setCreatedBy("");
    setShowUploadForm(false);
    setError(null);
  };

  const handleSave = async () => {
    if (!brandId || files.length === 0 || !createdBy) {
      setError("Please fill all fields and select at least one file.");
      return;
    }

    setUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append("venue_id", brandId);
    formData.append("updatedBy", createdBy);
    files.forEach((file, index) => {
      formData.append(`menu_pdf[${index}]`, file);
    });

    try {
      await api.post("/api/upload/files", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      resetForm();
      fetchBrandFiles(); // Refresh the list
    } catch (err: any) {
      setError(err.response?.data?.message || "An error occurred while uploading files.");
    } finally {
      setUploading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-transparent flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl">
        <div className="bg-[#00A4B6] p-4 flex justify-between items-center rounded-t-lg">
          <h3 className="text-xl font-semibold text-white">Add Venue Files</h3>
          <button onClick={onClose} className="text-white text-2xl">&times;</button>
        </div>

        <div className="p-6">
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setShowUploadForm(!showUploadForm)}
              className="px-4 py-2 bg-[#00A4B6] text-white rounded-md hover:bg-[#008C9E]"
            >
              Add Files
            </button>
          </div>

          {showUploadForm && (
            <div className="p-4 border rounded-lg bg-gray-50 mb-4">
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
              <div className="mb-4">
                <label
                  htmlFor="file-upload"
                  className="block text-sm font-medium text-gray-700"
                >
                  Add Files
                </label>
                <input
                  id="file-upload"
                  type="file"
                  multiple
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="created-by"
                  className="block text-sm font-medium text-gray-700"
                >
                  Created By
                </label>
                <input
                  id="created-by"
                  type="text"
                  value={createdBy}
                  onChange={(e) => setCreatedBy(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="flex justify-end gap-2 items-center">
                {uploading && <InlineLoader />}
                <button
                  onClick={resetForm}
                  disabled={uploading}
                  className="px-4 py-2 bg-gray-200 rounded-md disabled:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  disabled={uploading}
                  className="px-4 py-2 bg-[#00A4B6] text-white rounded-md disabled:bg-gray-400 hover:bg-[#008C9E]"
                >
                  Save
                </button>
              </div>
            </div>
          )}

          <hr className="my-4" />

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Link</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Uploaded By</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {loadingFiles ? (
                  <tr>
                    <td colSpan={4} className="text-center py-4">
                      <InlineLoader />
                    </td>
                  </tr>
                ) : brandFiles.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="text-center py-4 text-gray-500">
                      No files found.
                    </td>
                  </tr>
                ) : (
                  brandFiles.map((file) => (
                    <tr key={file.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
                        <a href={file.venue_file_url} target="_blank" rel="noopener noreferrer">{file.venue_file_url}</a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(file.created_at)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{file.uploaded_by}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex items-center gap-2">
                        <button className="text-blue-600 hover:text-blue-900">
                          Edit
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end mt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandFilesModal;