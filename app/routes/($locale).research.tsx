import React from 'react';
import {FaSearch} from 'react-icons/fa';
import FaqSection from '~/components/FaqSection';
import Form from '~/components/Form';

export default function ResearchPage() {
  return (
    <div className="bg-white  py-8 sm:py-12 px-4 sm:px-5 mb-10">
      <div className="text-center mt-4 px-4 sm:px-6">
        <p className="!text-2xl text-[var(--color-2)] font-bold !my-5">
          Recherche
        </p>

        <form
          onSubmit={() => {}}
          className="w-full max-w-md mx-auto relative mt-2"
        >
          <input
            required
            type="search"
            placeholder="Recherche"
            className="w-96 !text-sm px-6 py-3 border-2 !rounded-full placeholder-black focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="absolute right-2 top-[45%] transform -translate-y-1/2 text-black p-2"
            aria-label="Subscribe"
          >
            <FaSearch className="!font-light" />
          </button>
        </form>
      </div>
    </div>
  );
}
