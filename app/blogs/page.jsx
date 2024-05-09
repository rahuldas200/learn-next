import Link from 'next/link'
import React from 'react'

export default function Blogs() {

  const blogs = [
    {
      id:1,
      title:"Blog 1",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde eos adipisci accusamus veritatis id placeat tempora rerum aperiam ipsa neque. Non vel, molestias neque, recusandae ratione voluptatum ipsum fugiat iusto sit labore perferendis necessitatibus temporibus quod, sequi eum minima! Quos pariatur minima hic aperiam quibusdam reiciendis in impedit fugit quam."
    },
    {
      id:2,
      title:"Blog 2",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde eos adipisci accusamus veritatis id placeat tempora rerum aperiam ipsa neque. Non vel, molestias neque, recusandae ratione voluptatum ipsum fugiat iusto sit labore perferendis necessitatibus temporibus quod, sequi eum minima! Quos pariatur minima hic aperiam quibusdam reiciendis in impedit fugit quam."
    }
  ]

  return (
    <div>
      <h1>Blogs</h1>
      <br />
      <ul>
        {
          blogs.map( (blog) => (
            <li className='mb-5' key={blog.id}>
              <Link href= {`/blogs/${blog.id}`}>{blog.title}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

