import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center items-center space-x-2 my-4">
      <button
        onClick={handlePrevious}
        className={`px-4 py-2 bg-blue-500 text-white rounded ${
          currentPage === 1
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:bg-blue-700'
        }`}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className="px-4 py-2">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNext}
        className={`px-4 py-2 bg-blue-500 text-white rounded ${
          currentPage === totalPages
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:bg-blue-700'
        }`}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
