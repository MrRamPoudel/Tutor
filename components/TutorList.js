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
        <div className="overflow-x-auto bg-gray-100">
            {tutors.length > 0 ? (
            <table className="min-w-full divide-y-2 divide-gray-200 text-sm text-justify">
                <thead>
                <tr>
                    <th
                    className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
                    >
                    Tutor
                    </th>
                    <th
                    className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
                    >
                    Major
                    </th>
                    <th
                    className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
                    >
                    Course
                    </th>
                    <th className="px-4 py-2"></th>
                </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">

                    {tutors.map((tutor) => (
                        <tr key={tutor.sid}>
                            <td className="whitespace-nowrap px-4 py-2">
                                <p className='text-gray-700'>{tutor.student.fname} {tutor.student.lname}</p>
                                <p className='text-gray-400 text-xs'>{tutor.student.email}</p>
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                {tutor.major.map((major) => (
                                    <p>{major}</p>
                                ))}
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                {tutor.courses.map((course) => (
                                    <p>{course}</p>
                                ))}
                            </td>
                            <Link href={`/tutor/${tutor.sid}`}>
                                <button className="mx-2 my-2 bg-white transition duration-150 ease-in-out hover:border-gray-700 hover:text-gray-600 rounded border border-gray-600 text-gray-500 px-6 py-2 text-xs">
                                    View
                                </button>
                            </Link>
                        </tr>
                    ))}
                </tbody>
            </table>
            ) : (
                <p>Loading tutors...</p>
            )}
        </div>
    )
}
