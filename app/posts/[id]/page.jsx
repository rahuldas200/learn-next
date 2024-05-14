
import Link from 'next/link';
import React from 'react'
import {getPost} from '@/lib/getAllPosts';

export default async function page({params}) {
  const {id} = params;
  const post = await getPost(id);
  console.log(post);
  return (
    <div>
      <p>you are clicked in post number {id}</p>

      <div>
        <p className='text-2xl'>{post.title}</p>
        <p className='text-sm mt-5'>{post.body}</p>
      </div>

      <button className='p-2 ml-6 mt-5 bg-green-500'>
        <Link href="/posts" >go back</Link>
      </button>
    </div>
  )
}
