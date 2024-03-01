import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
      <h1 className="text-7xl">Home Page</h1>  
      <Link href='/about' className='text-2xl'>
        About Page
      </Link>
      {/* <Link href='/client' className='text-2xl'>
        Client Page
      </Link>
      <Link href='/drinks' className='text-2xl'>
        Drinks Page
      </Link>
      <Link href='/prisma-example' className='text-2xl'>
        PrismaExample Page
      </Link>
      <Link href='/query' className='text-2xl'>
        Query Page
      </Link>
      <Link href='/tasks' className='text-2xl'>
        Tasks Page
      </Link> */}
    </div>
  )
}


export default HomePage

