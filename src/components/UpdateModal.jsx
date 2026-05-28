"use client";

import { Envelope } from "@gravity-ui/icons";
import { Button, Card, Description, Modal, Surface, FieldError, Form, Input, Label, Separator, TextField } from '@heroui/react';
import { redirect } from "next/navigation";


export function UpdateModal({pet}) {
    const { _id, name, species, breed, age, gender, image, healthStatus, vaccinationStatus, status, ownerEmail, description, adoptionFee, location, } = pet;
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const pet = Object.fromEntries(formData.entries())
        // console.log(destination)

        const res = await fetch(`http://localhost:5000/pets/${_id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(pet)
        })
        const data = await res.json()
        redirect("/all-pets")
    }
    return (
        <Modal>
            <Button variant="secondary" className=' rounded-full px-2 bg-[linear-gradient(90deg,#ff8a3d_0%,#ff6b00_45%,#3b82f6_100%)] text-white px-4 p-2 rounded-full  text-sm font-semibold shadow-lg hover:scale-105 transition duration-300' >Update Pet</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <Envelope className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Update Pet</Modal.Heading>
                            <p className="mt-1.5 text-sm leading-5 text-muted">
                                Fill out the form below and get back to you. The modal adapts automatically
                                when the keyboard appears on mobile.
                            </p>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <Card>
                                    <Form onSubmit={(onSubmit)} className="flex flex-col gap-4  ">
                                        <TextField
                                        defaultValue={name}
                                            isRequired
                                            name="name"
                                            type="text">
                                            <Label>Pet Name</Label>
                                            <Input placeholder="Enter Your Name" />
                                            <FieldError />
                                        </TextField>

                                        <TextField
                                         defaultValue={species}
                                            isRequired
                                            name="species"
                                            type="text">
                                            <Label>Species </Label>
                                            <Input placeholder="Enter your Species " />
                                            <FieldError />
                                        </TextField>

                                        <TextField
                                        defaultValue={breed}
                                            isRequired
                                            name="breed"
                                            type="text">
                                            <Label>Breed </Label>
                                            <Input placeholder="Enter your Breed " />
                                            <FieldError />
                                        </TextField>
                                        <TextField
                                         defaultValue={age}
                                            isRequired
                                            name="age"
                                            type="text">
                                            <Label>Age </Label>
                                            <Input placeholder="Enter your Age " />
                                            <FieldError />
                                        </TextField>
                                        <TextField
                                        defaultValue={gender}
                                            isRequired
                                            name="gender"
                                            type="text">
                                            <Label>Gender </Label>
                                            <Input placeholder="Enter your Gender " />
                                            <FieldError />
                                        </TextField>
                                        <TextField
                                        defaultValue={image}
                                            isRequired
                                            name="image"
                                            type="url">
                                            <Label>Image URL </Label>
                                            <Input placeholder="Enter your Image URL " />
                                            <FieldError />
                                        </TextField>
                                        <TextField
                                        defaultValue={healthStatus}
                                            isRequired
                                            name="healthStatus"
                                            type="text">
                                            <Label>Health Status</Label>
                                            <Input placeholder="Enter your Health Status"/>
                                            <FieldError />
                                        </TextField>
                                        <TextField
                                        defaultValue={vaccinationStatus}
                                            isRequired
                                            name="vaccinationStatus"
                                            type="text">
                                            <Label>Vaccination Status</Label>
                                            <Input placeholder="Enter your Vaccination Status" />
                                            <FieldError />
                                        </TextField>
                                        <TextField
                                        defaultValue={location}
                                            isRequired
                                            name="location"
                                            type="text">
                                            <Label>Location</Label>
                                            <Input placeholder="Enter your Location" />
                                            <FieldError />
                                        </TextField>

                                        <TextField
                                        defaultValue={adoptionFee}
                                            isRequired
                                            name="adoptionFee"
                                            type="number">
                                            <Label>Adoption Fee</Label>
                                            <Input placeholder="Enter your Adoption Fee" />
                                            <FieldError />
                                        </TextField>

                                        <TextField
                                        defaultValue={description}
                                            isRequired
                                            name="description"
                                            type="text">
                                            <Label>Description</Label>
                                            <Input placeholder="Enter your Description" />
                                            <FieldError />
                                        </TextField>

                                        <TextField
                                        defaultValue={ownerEmail}
                                            isRequired
                                            name="ownerEmail"
                                            type="email" value='shakib75@gmail.com'>
                                            <Label>Owner Email</Label>
                                            <Input placeholder="Enter your Owner Email" />
                                            <FieldError />
                                        </TextField>

                                        <TextField
                                        defaultValue={status}
                                            isRequired
                                            name="status"
                                            type="text">
                                            <Label>Status</Label>
                                            <Input placeholder="Enter your status" />
                                            <FieldError />
                                        </TextField>

                                        {/* <div className="">
                                            <Button type="submit" className=' rounded-sm bg-[linear-gradient(90deg,#ff8a3d_0%,#ff6b00_45%,#3b82f6_100%)] text-white px-2 p-2 rounded-2xl text-sm font-semibold shadow-lg hover:scale-105 transition duration-300'>
                                                Update pet
                                            </Button>
                                        </div> */}
                        <Modal.Footer>
                           
                            <Button type="submit" slot="close" className=' rounded-sm bg-[linear-gradient(90deg,#ff8a3d_0%,#ff6b00_45%,#3b82f6_100%)] text-white px-6 p-2 rounded-2xl text-sm font-semibold shadow-lg hover:scale-105 transition duration-300 '>Submit</Button>
                        </Modal.Footer>
                                    </Form>

                                </Card>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}