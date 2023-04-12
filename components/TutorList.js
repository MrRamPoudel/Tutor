import React, { useState, useEffect } from 'react';

export default function TutorList() {
    const [tutors, setTutors] = useState([]);

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
        <div className="overflow-x-auto">
            {tutors.length > 0 ? (
            <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
                <thead>
                <tr>
                    <th
                    className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                    >
                    Name
                    </th>
                    <th
                    className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                    >
                    Email
                    </th>
                    <th
                    className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                    >
                    Major
                    </th>
                    <th
                    className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                    >
                    Course
                    </th>
                    <th className="px-4 py-2"></th>
                </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">

                {tutors.map((tutor) => (
                    <tr key={tutor.sid}>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        {tutor.student.fname} {tutor.student.lname} 
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{tutor.student.email} </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{tutor.major} </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{tutor.courses} </td>
                    </tr>
                ))}
                
                <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    John Doe
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Developer</td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">$120,000</td>
                    <td className="whitespace-nowrap px-4 py-2">
                    <a
                        href="#"
                        className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                    >
                        View
                    </a>
                    </td>
                </tr>

                </tbody>
            </table>
            ) : (
                <p>Loading tutors...</p>
            )}
        </div>
    )
}
