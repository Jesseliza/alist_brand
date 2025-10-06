"use client";

import React from 'react';
import Pagination from '@/components/general/Pagination';
import { usePagination } from '@/hooks/usePagination';

const dummyData = Array.from({ length: 30 }, (_, i) => ({
  slNo: i + 1,
  voucherCode: `VC-2024-${String(i + 1).padStart(3, '0')}`,
  voucherStatus: i % 3 === 0 ? 'Issued' : i % 3 === 1 ? 'Redeemed' : 'Expired',
  userAvailed: `User ${i + 1}`,
  offerDate: `2024-01-${String((i % 30) + 1).padStart(2, '0')}`,
  claimedDate: `2024-01-${String((i % 30) + 1).padStart(2, '0')}`,
  redeemedDate: i % 3 === 1 ? `2024-01-${String((i % 30) + 1).padStart(2, '0')}` : '-',
  lastReset: 'N/A',
}));

const VoucherCode = () => {
  const {
    currentPage,
    itemsPerPage,
    handlePageChange,
    handleItemsPerPageChange,
    startIndex,
    endIndex,
  } = usePagination(dummyData.length, 10);

  const currentVouchers = dummyData.slice(startIndex, endIndex);

  return (
    <div className="mt-4">
      <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Voucher Codes</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  SL.NO
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  VOUCHER CODE
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  VOUCHER STATUS
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  USER AVAILED
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  OFFER DATE
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CLAIMED DATE
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  REDEEMED DATE
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  LAST RESET
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentVouchers.map((voucher) => (
                <tr key={voucher.slNo}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{voucher.slNo}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{voucher.voucherCode}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{voucher.voucherStatus}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{voucher.userAvailed}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{voucher.offerDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{voucher.claimedDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{voucher.redeemedDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{voucher.lastReset}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Pagination
        totalItems={dummyData.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
    </div>
  );
};

export default VoucherCode;