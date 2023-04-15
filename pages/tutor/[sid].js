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
      <h1>{tutor.student.fname} {tutor.student.lname}</h1>
      {/* Render other tutor details here */}
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