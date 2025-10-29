"use client";

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'next/navigation';
import { getVoucherCodesStart } from '@/store/campaigns/CampaignSlice';
import { RootState } from '@/store/store';
import Pagination from '@/components/general/Pagination';
import Loader from '@/components/general/Loader';
import { VoucherCode } from '@/types/entities';

const getStatus = (voucher: VoucherCode) => {
  if (voucher.used_at) {
    return { text: 'Claimed ', color: 'bg-[#00A4B6]' };
  }
  if (voucher.redem_at) {
    return { text: 'Verified', color: 'bg-green-500' };
  }
  return { text: 'Not Claimed', color: 'bg-yellow-500' };
};

const formatDate = (dateString: string | null) => {
  if (!dateString) {
    return '-';
  }
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

const VoucherCodeTable = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { campaignId } = params;

  const {
    voucherCodes,
    voucherCodesLoading,
    voucherCodesError,
    voucherCodesPagination,
    paginationLoading,
  } = useSelector((state: RootState) => state.campaigns);

  useEffect(() => {
    if (campaignId) {
      dispatch(getVoucherCodesStart({ id: campaignId as string, isPagination: false }));
    }
  }, [dispatch, campaignId]);

  const handlePageChange = (page: number) => {
    if (campaignId) {
      dispatch(
        getVoucherCodesStart({
          id: campaignId as string,
          page,
          per_page: voucherCodesPagination?.per_page,
          isPagination: true,
        })
      );
    }
  };

  const handleItemsPerPageChange = (items: number) => {
    if (campaignId) {
      dispatch(
        getVoucherCodesStart({
          id: campaignId as string,
          page: 1,
          per_page: items,
        })
      );
    }
  };

  if (voucherCodesLoading && !voucherCodes.length) {
    return <Loader />;
  }

  if (voucherCodesError) {
    return <p className="text-red-500 text-center py-8">Error: {voucherCodesError}</p>;
  }

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
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {voucherCodes.map((voucher, index) => {
                const status = getStatus(voucher);
                return (
                  <tr key={voucher.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {voucherCodesPagination ? (voucherCodesPagination.per_page * (voucherCodesPagination.current_page - 1)) + index + 1 : index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{voucher.offer_code}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-white ${status.color}`}>
                        {status.text}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{voucher.user?.name || 'N/A'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(voucher.offer_date)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(voucher.used_at)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(voucher.redem_at)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {voucherCodesPagination && voucherCodesPagination.total > 0 && (
        <Pagination
          totalItems={voucherCodesPagination.total}
          itemsPerPage={voucherCodesPagination.per_page}
          currentPage={voucherCodesPagination.current_page}
          onPageChange={handlePageChange}
          onItemsPerPageChange={handleItemsPerPageChange}
          isLoading={paginationLoading}
        />
      )}
    </div>
  );
};

export default VoucherCodeTable;