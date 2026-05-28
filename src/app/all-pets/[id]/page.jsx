import AdopRequestModal from '@/components/AdopRequestModal';
import { DeleteModal } from '@/components/DeleteModal';
import { UpdateModal } from '@/components/UpdateModal';
import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const PetDetailsPage = async ({ params }) => {
    const { id } = await params;
    console.log(id)
    const res = await fetch(`http://localhost:5000/pets/${id}`);
    const pet = await res.json()
    const { _id, name, species, breed, age, gender, image, healthStatus, vaccinationStatus, status, ownerEmail, description, adoptionFee, location, } = pet;
    return (
        <div>
            <Card className=" border justify-center w-11/12 mx-auto">
                <div className="">
                    <Image src={image} alt={name} width={400} height={200} className='h-90 w-[600px] rounded-2xl mx-auto'></Image>
                </div>
                <div className="flex flex-1 flex-col gap-3 px-10 w-[80%] mx-auto">
                    <Card.Header className="gap-1">
                        <Card.Title className="pr-8 font-bold text-2xl">{name}</Card.Title>
                        <Card.Description>
                            {description}
                        </Card.Description>
                        <p>Species : {species}</p>
                        <p>Gender : {gender}</p>
                        <p>Age : {age}</p>
                        <p>VaccinationStatus : {vaccinationStatus}</p>
                        <p>Breed : {breed}</p>
                        <p>
                            healthStatus : {healthStatus}
                        </p>

                    </Card.Header>
                    <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-foreground font-bold text-xl">Price : Only ${adoptionFee}</span>
                            <span className="text-xs text-muted">Location : {location}</span>

                        </div >
                        <div className='flex gap-4'>
                            <AdopRequestModal pet={pet}></AdopRequestModal>
                            <UpdateModal pet={pet}></UpdateModal>
                            <DeleteModal pet={pet}></DeleteModal>

                        </div>

                    </Card.Footer>
                </div>
            </Card>
        </div>
    );
};

export default PetDetailsPage;