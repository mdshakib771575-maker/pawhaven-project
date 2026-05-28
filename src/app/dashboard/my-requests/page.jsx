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
    const res = await fetch(`http://localhost:5000/adoptions/${user?.id}`);
    const adoptions = await res.json();
    console.log(adoptions);
    return (
        <div className='space-y-6'>
            {
              adoptions.map(adop => <RequestCard key={adop._id} adop={adop}></RequestCard>)
            }
        </div>
    );
};

export default MyRequestPage;