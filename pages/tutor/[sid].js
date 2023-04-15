import { useRouter } from 'next/router';
import prisma from '../../libs/prisma';
import Layout from '@/components/layout/layout'

const TutorPage = ({ tutor }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div>
        <div className="my-6 lg:my-12 container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-gray-300">
            <div>
                <h4 className="text-2xl font-bold leading-tight text-gray-800 dark:text-gray-800">{tutor.student.fname} {tutor.student.lname}</h4>
                <ul className="flex flex-col md:flex-row items-start md:items-center text-gray-600 dark:text-gray-600 text-sm mt-3">
                    <li className="flex items-center mr-4">
                        <div className="mr-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-paperclip" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9 l6.5 -6.5" />
                            </svg>
                        </div>
                        <span>Inactive</span>
                    </li>
                    <li className="flex items-center mt-4 md:mt-0">
                        <div className="mr-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane-departure" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M15 12h5a2 2 0 0 1 0 4h-15l-3 -6h3l2 2h3l-2 -7h3z" transform="rotate(-15 12 12) translate(0 -1)" />
                                <line x1={3} y1={21} x2={21} y2={21} />
                            </svg>
                        </div>
                        <span>Last actived:</span>
                    </li>
                </ul>
                <ul className="flex flex-col md:flex-row items-start md:items-center text-gray-600 dark:text-gray-600 text-sm mt-3">
                    <li className="flex items-center mr-4">
                        <span>Simmons Hall 310G</span>
                    </li>
                    <li className="flex items-center mt-4 md:mt-0">
                        <span>Mon. to Fri.: 09:00 - 11:00</span>
                    </li>
                </ul>
            </div>
            <div className="mt-6 md:mt-0">
                <button className="mr-3 bg-gray-200 dark:bg-gray-700 focus:outline-none transition duration-150 ease-in-out rounded hover:bg-gray-300 dark:hover:bg-gray-600 px-5 py-2 text-sm">Chat</button>
                <button className="mr-3 bg-gray-200 dark:bg-gray-700 focus:outline-none transition duration-150 ease-in-out rounded hover:bg-gray-300 dark:hover:bg-gray-600 px-5 py-2 text-sm">Back</button>
            </div>
        </div>
        <div className="my-6 lg:my-12 container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-gray-300">
            <div>
                <h4 className="text-xl font-bold leading-tight text-gray-800 dark:text-gray-800">Majors:</h4>
                <ul className="flex flex-col md:flex-row items-start md:items-center text-gray-600 dark:text-gray-600 text-sm mt-3">
                    {tutor.major.map((major) => (
                      <li className="flex items-center mr-4">
                        <span>{major}</span>
                      </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className="my-6 lg:my-12 container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-gray-300">
            <div>
                <h4 className="text-xl font-bold leading-tight text-gray-800 dark:text-gray-800">Related Courses:</h4>
                <ul className="flex flex-col md:flex-row items-start md:items-center text-gray-600 dark:text-gray-600 text-sm mt-3">
                    {tutor.courses.map((course) => (
                      <li className="flex items-center mr-4">
                        <span>{course}</span>
                      </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const tutors = await prisma.tutor.findMany({ select: { sid: true } });
  const paths = tutors.map((tutor) => ({ params: { sid: tutor.sid.toString() } }));

  return { paths, fallback: true };
}

export async function getStaticProps(context) {
  const { sid } = context.params;
  const tutor = await prisma.tutor.findUnique({
    where: { sid: parseInt(sid) },
    include: { student: true },
  });

  return {
    props: { tutor },
    revalidate: 60, // Revalidate the data every 60 seconds
  };
}

export default TutorPage;