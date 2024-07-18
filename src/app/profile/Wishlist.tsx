import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaEye, FaTrash } from 'react-icons/fa';
import Link from 'next/link';

const Wishlist = () => {
  // Initialize with empty array or with data from a local storage or API if needed
  const [whitelistItems, setWhitelistItems] = useState<any[]>([]);

  // Example: Fetch data from local storage or API in useEffect
  useEffect(() => {
    const storedItems = localStorage.getItem('whitelistItems');
    if (storedItems) {
      setWhitelistItems(JSON.parse(storedItems));
    }
  }, []);

  // Save to local storage or API
  useEffect(() => {
    localStorage.setItem('whitelistItems', JSON.stringify(whitelistItems));
  }, [whitelistItems]);

  const handleRemoveClick = (id: number) => {
    const updatedItems = whitelistItems.filter(item => item.id !== id);
    setWhitelistItems(updatedItems);
  };

  return (
    <div>
      <h2 className="text-xl font-bold">My Wishlist</h2>
      <table className="min-w-full divide-y divide-gray-200 border-[1px] mt-5">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {whitelistItems.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.images && item.images.length > 0 && (
                  <Image
                    src={item.images[0].url}
                    alt={item.name}
                    width={60}
                    height={60}
                  />
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{item.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Rs. {item.price}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <Link href={`/product/${item.id}`}>
                  <FaEye className='text-[#E66C4D] mr-2' />
                </Link>
                <button onClick={() => handleRemoveClick(item.id)}>
                  <FaTrash className='text-zinc-800 mr-2' />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Wishlist;
