import withAuth from "../components/withAuth";
import { Inter } from 'next/font/google'
import Layout from '@/components/layout/layout'

const inter = Inter({ subsets: ['latin'] })

const IndexPage = () => {
  return (
    <Layout />
  )
}

export default withAuth(IndexPage);