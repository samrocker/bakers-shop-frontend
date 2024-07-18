
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../redux/store";
import Image from 'next/image';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { removeFromWhitelist } from '@/redux/whitelistSlice';
import { RemoveCircle } from '@mui/icons-material';
import Link from 'next/link';


const Wishlist = () => {
  
    const [whitelistItems, setWhitelistItems] = useState<any[]>([]);
  
    const persistedWhitelistItems = useSelector(
      (state: RootState) => state.whitelist.items
    );
  
    useEffect(() => {
      setWhitelistItems(persistedWhitelistItems);
    }, [persistedWhitelistItems]);
  
    console.log(whitelistItems)
    const dispatch = useDispatch()  
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
                      {whitelistItems.map((item) => {

                        const handleRemoveClick = () => {
                          dispatch(removeFromWhitelist(item.id));
                        };
                        return (
                          <tr key={item.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {
                                item.images && (
                                  <>
                                  {item.images.length > 0 && (
                                <Image
                                    src={item.images[0].url}
                                    alt={item.name}
                                    width={60}
                                    height={60}
                                />
                            )}
                                  </>
                                )
                              }
                            
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">{item.name}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">Rs. {item.price}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <Link href={`/product/${item.id}`}><RemoveRedEyeIcon className='text-[#E66C4D] mr-2' /></Link>
                              <button onClick={handleRemoveClick}><RemoveCircle className='text-zinc-800 mr-2' /></button>
                            </td>
                          </tr>
                        )
                      }

                      )}
                    </tbody>
                  </table>
    </div>
  )
}

export default Wishlist