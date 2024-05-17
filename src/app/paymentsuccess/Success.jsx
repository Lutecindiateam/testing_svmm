"use client"
import React from 'react';
import { useSearchParams } from 'next/navigation';

const Success = () => {
    const searchParams = useSearchParams();
    const paymentId = searchParams.get('paymentid');
    

    return (
        <div className="flex flex-col items-center justify-center mt-[100px] text-center">
            <div className="bg-green-100 border border-green-400 w-1/2 text-green-700 px-4 py-3 rounded relative" role="alert">
                <i className="fas fa-check-circle text-4xl mb-2 block mx-auto"></i>
                <strong className="font-bold ">Payment successful!</strong>
                <br />
                <br />
                <span className="block sm:inline ">Your paymentID= {paymentId} has been processed.</span>
            </div>
            <br />
            <div>
                <button
                    onClick={() => window.location.href="/receipt?paymentid=" + paymentId}
                    className="introduction__btn thm-btn bg-orange-500 text-white py-2 px-4 rounded"
                    style={{ padding: '15px' ,backgroundColor:"orange"}}
                >
                    <i className="fas fa-arrow-circle-right"></i>Download Receipt
                </button>
            </div>
        </div>
    );
}

export default Success;
