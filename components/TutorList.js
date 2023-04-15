import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function TutorList() {
    const [tutors, setTutors] = useState([]);
    const [show, setShow] = useState(null)

    useEffect(() => {
        async function fetchTutors() {
          const response = await fetch('/api/tutorList');
          const data = await response.json();
          console.log('API Response:', data); // Add this line to check the response
          setTutors(data);
        }
      
        fetchTutors();
      }, []);

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
                        {tutors.map((tutor) => (
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
            </div>
        </div>
    );
}
