// pages/api/students.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const students = await prisma.student.findMany();
      res.status(200).json(students);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching students', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}