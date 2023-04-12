import prisma from '@/libs/prisma';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
        const tutors = await prisma.tutor.findMany({
            include: {
              student: true,
            },
          });
      res.status(200).json(tutors);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching tutors', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}