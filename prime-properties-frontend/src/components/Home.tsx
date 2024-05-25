import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import Card from './ui/Card';
import '../styles.css';
import useAxios from '../hooks/useAxios';

const Home = () => {
  const { response, error, loading, fetchData } = useAxios();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 6; // Example total number of pages

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Add logic to fetch or display data for the selected page
  };

  // Example data for demonstration
  const data = Array.from({ length: 46 }, (_, index) => ({
    id: index + 1,
    title: `Item ${index + 1}`,
    description: `Description for item ${index + 1}`,
  }));

  // Calculate the index of the first item on the current page
  const startIndex = (currentPage - 1) * 8;
  // Slice the data array to get items for the current page
  const currentPageData = data.slice(startIndex, startIndex + 8);

  // const cards = Array.from({ length: 10 });

  const getProperty = async () => {
    await fetchData({
      url: '/api/property/allProperty',
      method: 'GET',
    });
  };
  useEffect(() => {
    getProperty();
  }, []);

  return (
    <div className=" container mx-auto">
      <div className="flex flex-row item-center ml-6 mt-6">
        <h1 className="text-xl text-gray-400">73 Results | </h1>
        <h1 className="text-xl font-semibold">
          Property for Sale in Bangalore
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        {/* Render DemoCard components using map */}
        <div className="hidden-scrollbar overflow-y-auto h-[85vh]">
          {response && response.map((item: any) => <Card item={item} />)}
          <div className="">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
