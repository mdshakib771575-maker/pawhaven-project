import PetsCard from '@/components/PetsCard';
import React from 'react';

const AllPits =async () => {
    const res  = await fetch("http://localhost:5000/pets");
    const Pets = await res.json();
    console.log(Pets)
    return (
        <div className='w-11/12 mx-auto mt-2'>
        <h2 className='font-bold text-2xl'>ALL Pets</h2>
        <div className='grid lg:grid-cols-3 gap-8 '>
          {Pets.map(pet => <PetsCard key={pet._id} pet={pet}></PetsCard>)}
        </div>
        </div>
    );
};

export default AllPits;