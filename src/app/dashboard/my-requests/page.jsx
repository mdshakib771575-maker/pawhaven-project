import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';import {Button, Table} from "@heroui/react";
import { MyRequestCard, RequestCard } from '@/components/RequestCard';
const MyRequestPage =async() => {
    const session = await auth.api.getSession({
    headers: await headers() 
    
})
const user = session?.user;
// console.log(user)
    const res = await fetch(`${process.env.
NEXT_PUBLIC_SERVER_URL}/adoptions/${user?.id}`);
    const adoptions = await res.json();
    console.log(adoptions);
    return (
        <div className='space-y-6'>
              {adoptions.length === 0 ? (
                 <p className="text-center text-gray-500  py-10 text-2xl">
                   No data available
                 </p>
               ) : (
                 adoptions.map(adop => (
                   <RequestCard key={adop._id} adop={adop} />
                 ))
               )}
        </div>
    );
};

export default MyRequestPage;