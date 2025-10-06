"use client";

import React from 'react';

const dummyData = [
  {
    slNo: 1,
    voucherCode: 'VC-2024-001',
    voucherStatus: 'Issued',
    userAvailed: 'John Doe',
    offerDate: '2024-01-15',
    claimedDate: '2024-01-20',
    redeemedDate: '2024-01-25',
    lastReset: 'N/A',
  },
  {
    slNo: 2,
    voucherCode: 'VC-2024-002',
    voucherStatus: 'Redeemed',
    userAvailed: 'Jane Smith',
    offerDate: '2024-02-10',
    claimedDate: '2024-02-12',
    redeemedDate: '2024-02-18',
    lastReset: 'N/A',
  },
  {
    slNo: 3,
    voucherCode: 'VC-2024-003',
    voucherStatus: 'Expired',
    userAvailed: 'Mike Johnson',
    offerDate: '2024-03-01',
    claimedDate: '2024-03-05',
    redeemedDate: '-',
    lastReset: 'N/A',
  },
];

const VoucherCode = () => {
  return (
    <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md mt-4">
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
            {dummyData.map((voucher) => (
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
  );
};

export default VoucherCode;