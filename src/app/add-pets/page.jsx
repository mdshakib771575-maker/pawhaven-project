"use client"
import React from 'react';
import { Button, Card, Description, FieldError, Form, Input, Label, Separator, TextField } from '@heroui/react';
import { redirect } from 'next/navigation';

const AddPitsPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const pet = Object.fromEntries(formData.entries())
        // console.log(destination)

           const res = await fetch(`http://localhost:5000/pets/${_id}`,{
                method:"PATCH",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(pet)
            })
        const data = await res.json()
        redirect("/all-pets")
        console.log(data)

    }
    return (
        <div className='my-4'>
            <Card className='p-10  w-120 mx-auto shadow'>
                <Form onSubmit={(onSubmit)} className="flex w-96 flex-col gap-4  ">
                    <TextField
                        isRequired
                        name="name"
                        type="text">
                        <Label>Pet Name</Label>
                        <Input placeholder="Enter Your Name" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="species "
                        type="text">
                        <Label>Species </Label>
                        <Input placeholder="Enter your Species " />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="breed "
                        type="text">
                        <Label>Breed </Label>
                        <Input placeholder="Enter your Breed " />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="Age "
                        type="number">
                        <Label>Age </Label>
                        <Input placeholder="Enter your Age " />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="Gender"
                        type="text">
                        <Label>Gender </Label>
                        <Input placeholder="Enter your Gender " />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="image"
                        type="url">
                        <Label>Image URL </Label>
                        <Input placeholder="Enter your Image URL " />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="healthStatus"
                        type="text">
                        <Label>Health Status</Label>
                        <Input placeholder="Enter your Health Status
 " />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="vaccinationStatus"
                        type="text">
                        <Label>Vaccination Status</Label>
                        <Input placeholder="Enter your Vaccination Status" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="location"
                        type="text">
                        <Label>Location</Label>
                        <Input placeholder="Enter your Location" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="adoptionFee"
                        type="number">
                        <Label>Adoption Fee</Label>
                        <Input placeholder="Enter your Adoption Fee" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="description"
                        type="text">
                        <Label>Description</Label>
                        <Input placeholder="Enter your Description" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="ownerEmail"
                        type="email" value='shakib75@gmail.com'>
                        <Label>Owner Email</Label>
                        <Input placeholder="Enter your Owner Email" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="status"
                        type="text">
                        <Label>Status</Label>
                        <Input placeholder="Enter your status" />
                        <FieldError />
                    </TextField>

                    <div className="">
                        <Button type="submit" className='w-full rounded-sm bg-[linear-gradient(90deg,#ff8a3d_0%,#ff6b00_45%,#3b82f6_100%)] text-white px-2 p-2 rounded-2xl text-sm font-semibold shadow-lg hover:scale-105 transition duration-300'>
                            Add Pet
                        </Button>
                    </div>
                </Form>

            </Card>
        </div>
    );
};

export default AddPitsPage;