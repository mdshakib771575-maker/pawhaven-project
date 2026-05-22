import React from 'react';

import { Button, Card, CloseButton } from "@heroui/react";
import Image from 'next/image';
import Link from 'next/link';
const PetsCard = ({ pet }) => {
    const { _id, name, species, breed, age, gender, image, healthStatus, vaccinationStatus, status, ownerEmail, description, adoptionFee, location, } = pet;


    return (
        <Card className=" border justify-center mt-5 hover:scale-105 transition duration-800">
            <div className="">
                <Image src={image} alt={name} width={400}height={200} className='w-200 h-[250px] rounded-2xl'></Image>
            </div>
            <div className="flex flex-1 flex-col gap-3">
                <Card.Header className="gap-1">
                    <Card.Title className="pr-8 font-bold text-2xl">{name}</Card.Title>
                    <Card.Description>
                     {description}
                    </Card.Description>
                    <p>
                        {healthStatus}
                    </p>
                   
                </Card.Header>
                <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-foreground">Only ${adoptionFee}</span>
                        <span className="text-xs text-muted">{location}</span>
                    </div>
                   <Link href={`/all-pets/${_id}`}><Button className="w-full sm:w-auto inline-flex items-center gap-3 bg-[linear-gradient(90deg,#ff8a3d_0%,#ff6b00_45%,#3b82f6_100%)] text-white px-2 p-2 rounded-2xl text-sm font-semibold shadow-lg hover:scale-105 transition duration-300">View Details</Button></Link> 
                </Card.Footer>
            </div>
        </Card>
    );
}


export default PetsCard;