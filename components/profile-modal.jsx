"use client";

import { useState } from "react";

export const UserProfileModal = ({ isModalOpen, closeModal, userDetails }) => {
  if (!isModalOpen) return null;

  return (
    <div
      id="user-profile-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="fixed inset-0 flex items-center justify-center z-50 w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden"
    >
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={closeModal}
      ></div>
      <div className="relative p-4 w-full max-w-sm max-h-full">
        <div className="relative bg-white overflow-hidden shadow rounded-lg border w-full max-w-md">
          <div className="px-4 py-10 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              User Profile
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-redonebg">
              Here are your life chain account information
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <p className="text-sm font-medium text-redonebg">Full name</p>
                <p className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {userDetails.first_name + " " + userDetails.last_name}
                </p>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-redonebg">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {userDetails.email}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-redonebg">
                  Phone number
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {userDetails.phone}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <button className="bg-redonebg p-4 rounded-lg">
                    delete account
                </button>
              </div>
            </dl>
          </div>
          <div className="flex justify-end px-4 py-4 sm:px-6">
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
              onClick={closeModal}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
