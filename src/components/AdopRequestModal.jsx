"use client"
import React, { useState } from 'react';
import { Button, Modal, } from "@heroui/react";

import {DateField, Label} from "@heroui/react";
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';


const AdopRequestModal = ({pet}) => {
    // console.log(pet)
    const [departureDate,setDepertureDate]= useState(null)
    console.log(new Date(departureDate))

     const {
            data: session,
        } = authClient.useSession();
        const user = session?.user;
        //  console.log(user)


    const handalAdoptionRequest = async ()=>{
        const AdoptionRequestData ={    
            userId :user?.id,
            userImage : user?.image,
            userName : user?.name,
            petId : pet._id,
            petName : pet.name,
            adoptionFee :pet.adoptionFee,
            petImage : pet.image,
            petLocation : pet.location,
            depertureDate : new Date(departureDate)
 
        }
        // console.log(AdoptionRequestData)
         const {data:tokenData} = await authClient.token()  
         console.log(tokenData)  
         const res = await fetch(`/adoptions${process.env.NEXT_PUBLIC_SERVER_URL}`,{
            method:"POST",
            headers:{
                "Content-type":"application/json",
                authorization:`Bearer ${tokenData?.token}`
            },
            body:JSON.stringify(AdoptionRequestData)
        })
        const data  = await res.json()
        console.log(data)
        toast.success("Adoption Request Successfull")


    }
    return (
        <div>

            <Modal>
                <Button className="w-full sm:w-auto inline-flex items-center gap-3 bg-[linear-gradient(90deg,#ff8a3d_0%,#ff6b00_45%,#3b82f6_100%)] text-white px-5 p-2 rounded-2xl text-lg font-semibold shadow-lg hover:scale-105 transition duration-300">Adoupted</Button>
                <Modal.Backdrop>
                    <Modal.Container>
                        <Modal.Dialog className="sm:max-w-[360px]">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                               
                                <Modal.Heading className='text-center font-bold'>Adoption Request</Modal.Heading>
                            </Modal.Header>
                            <Modal.Body>
                                <DateField onChange={setDepertureDate} className="w-[256px] mb-5 mx-2 space-y-3 " name="date">
                                    <Label>Adoption Date</Label>
                                    <DateField.Group>
                                        <DateField.Input className="border">{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                                    </DateField.Group>
                                </DateField>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={handalAdoptionRequest}   className="w-full sm:w-auto inline-flex items-center gap-3 bg-[linear-gradient(90deg,#ff8a3d_0%,#ff6b00_45%,#3b82f6_100%)] text-white px-8 p-2 rounded-2xl text-lg font-semibold shadow-lg hover:scale-105 transition duration-300 lg:w-full " slot="close">
                                    submit
                                </Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default AdopRequestModal;