"use client";

import {AlertDialog, Button} from "@heroui/react";
import { redirect } from "next/navigation";




export function DeleteModal({pet}) {
    const { _id, name, species, breed, age, gender, image, healthStatus, vaccinationStatus, status, ownerEmail, description, adoptionFee, location, } = pet;
    const handalDelete = async()=>{
        const res = await fetch(`http://localhost:5000/pets/${_id}`,{
            method:"DELETE",
         headers:{
            "content-type":"application/json"
         }
        })
      const data = await res.json();
       redirect("/all-pets")
      console.log(data)
    }

  return (
    <AlertDialog>
      <Button variant="danger">Delete </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Pet permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{name}</strong> and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handalDelete} slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}