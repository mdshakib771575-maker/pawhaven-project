import PetsCard from '@/components/PetsCard';
import React from 'react';

const MyListingsPage = async () => {
    const res = await fetch(`${process.env.
NEXT_PUBLIC_SERVER_URL}/pets`);
    const Pets = await res.json();
    // console.log(Pets)
    return (
        <div className='w-11/12 mx-auto mt-2'>
            <h2 className='font-bold text-2xl text-center'>Listing All Pets</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 '>
                {Pets.map(pet => <PetsCard key={pet._id} pet={pet}></PetsCard>)}
            </div>
        </div>
    );
};

export default MyListingsPage;