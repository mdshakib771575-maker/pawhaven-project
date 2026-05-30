import React from 'react';
import PetsCard from './PetsCard';
import Link from 'next/link';
import { Button, Card } from '@heroui/react';
import Image from 'next/image';

const TopCard = async () => {
    const res = await fetch(`${process.env.
NEXT_PUBLIC_SERVER_URL}/pets`);
    const Pets = await res.json();
    const TopPets = Pets.slice(0, 6)

    return (
        <>
            <h2 className='text-center font-bold text-2xl mt-5'>Top Features</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-11/12 mx-auto'>
                {TopPets.map(pet => <Card key={pet._id} className=" border justify-center mt-5 hover:scale-105 transition duration-800">
                    <div className="">
                        <Image src={pet.image} alt={pet.name} width={400} height={200} className='w-200 h-[250px] rounded-2xl'></Image>
                    </div>
                    <div className="flex flex-1 flex-col gap-3">
                        <Card.Header className="gap-1">
                            <Card.Title className="pr-8 font-bold text-2xl">{pet.name}</Card.Title>
                            <Card.Description>
                                {pet.description}
                            </Card.Description>
                            <p>
                                {pet.healthStatus}
                            </p>

                        </Card.Header>
                        <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-foreground">Only ${pet.adoptionFee}</span>
                                <span className="text-xs text-muted">{pet.location}</span>
                            </div>
                            <Link href={`/all-pets/${pet._id}`}><Button className="w-full sm:w-auto inline-flex items-center gap-3 bg-[linear-gradient(90deg,#ff8a3d_0%,#ff6b00_45%,#3b82f6_100%)] text-white px-2 p-2 rounded-2xl text-sm font-semibold shadow-lg hover:scale-105 transition duration-300">View Details</Button></Link>
                        </Card.Footer>
                    </div>
                </Card>)}
            </div>
        </>
    );
};

export default TopCard;