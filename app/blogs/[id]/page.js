import { notFound } from 'next/navigation';
import React from 'react'

export default function BlogPage({params}) {
    const { id} = params;
    const newId = JSON.parse(id)

    if(newId >= 3){
        notFound();
    }

    return (
        <div className='mt-6'>
            The blog id is : {id} 
        </div>
    )
}
