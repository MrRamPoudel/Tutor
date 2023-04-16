import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function TutorList() {
    const [tutors, setTutors] = useState([]);
    const [show, setShow] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    useEffect(() => {
        async function fetchTutors() {
          const response = await fetch('/api/tutorList');
          const data = await response.json();
          console.log('API Response:', data); // Add this line to check the response
          setTutors(data);
        }
      
        fetchTutors();
    }, []);

    function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
    }

    function handlePageChange(newPage) {
        setCurrentPage(newPage);
        scrollToTop();
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = tutors.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className="w-full sm:px-6">
            <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                <table className="w-full whitespace-nowrap">
                    <thead>
                        <tr className="h-16 w-full text-sm leading-none text-gray-800">
                            <th className="font-normal text-left pl-4">Tutor</th>
                            <th className="font-normal text-left pl-12">Major</th>
                            <th className="font-normal text-left pl-12">Courses</th>
                            <th className="font-normal text-left pl-20">Status</th>
                        </tr>
                    </thead>
                    <tbody className="w-full">
                        {currentItems.map((tutor) => (
                            <tr key={tutor.sid} className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="pl-4">
                                            <p className="font-medium">{tutor.student.fname} {tutor.student.lname}</p>
                                            <p className="text-xs leading-3 text-gray-600 pt-2">{tutor.student.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-12">
                                    {tutor.major.map((major) => (
                                        <p className="text-sm font-medium leading-none text-gray-800">{major}</p>
                                    ))}
                                </td>
                                <td className="pl-12">
                                    {tutor.courses.map((course) => (
                                        <p className="text-xs leading-3 text-gray-600 mt-2">{course}</p>
                                    ))}
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">Offline</p>
                                </td>
                                <td className="px-7 2xl:px-0">
                                    <Link href={`/tutor/${tutor.sid}`}>
                                        <button className="mx-2 my-2 bg-white transition duration-150 ease-in-out hover:border-gray-700 hover:text-gray-600 rounded border border-gray-600 text-gray-500 px-6 py-2 text-xs">
                                            View
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
                    <div className=" w-full  flex items-center justify-between border-t border-gray-200">
                        <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                            <svg width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1.1665 4L4.49984 7.33333" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1.1665 4.00002L4.49984 0.666687" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="text-sm ml-3 font-medium leading-none ">Previous</p>
                        </div>
                        <div className="sm:flex hidden">
                        {Array.from({ length: Math.ceil(tutors.length / itemsPerPage) }, (_, index) => (
                            <p 
                                key={index} 
                                onClick={() => handlePageChange(index + 1)} 
                                className={`${ currentPage === index + 1 ? 
                                    "text-indigo-700 border-indigo-400"
                                    :"text-sm text-gray-600 hover:text-indigo-700 border-transparent hover:border-indigo-400"

                                } font-medium leading-none cursor-pointer border-t pt-3 mr-4 px-2`}>
                                {index + 1}
                            </p>
                        ))}
                        </div>
                        <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                            <p className="text-sm font-medium leading-none mr-3">Next</p>
                            <svg width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9.5 7.33333L12.8333 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9.5 0.666687L12.8333 4.00002" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
