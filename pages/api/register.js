import bcrypt from 'bcrypt'; 
import prisma from "@/libs/prisma"

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).end();
    }
    const { email, password, fname, lname } = req.body;
    const sid = parseInt(req.body.sid);

    const existingEmail = await prisma.student.findUnique({
      where: {
        email
      }
    })

    const existingSid = await prisma.student.findUnique({
        where: {
          sid
        }
    })

    if (!email || !password || !fname || !lname || !sid) {
    return res.status(400).json({ error: "All fields are required" });
    }
    
    if (existingEmail) {
    return res.status(422).json({ error: "Email already exists" });
    }
    
    if (existingSid) {
    return res.status(422).json({ error: "SID already exists" });
    }

    //const hashedPassword = await bcrypt.hash(password, 12);
    console.log(email+password+fname+lname+sid);
    console.log("start create");

    const student = await prisma.student.create({
      data: {
        fname: fname,
        lname: lname,
        sid: sid,
        email: email,
        auth: {
            create: {
                password: password,
            },
        },
      },
      include: {
        auth: true,
      },
    })

    console.log(student);
    return res.status(200).json(student);
  } catch (error) {
    return res.status(400).json({ error: `Something went wrong: ${error}` });
  }
}