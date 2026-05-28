import {Button, Card, CloseButton} from "@heroui/react";
import Image from "next/image";
import { AdoptionDeleteModal } from "./AdoptionDeleteModal";

export function RequestCard({adop}) {
  
  return (
    <Card className="w-11/12 mx-auto items-stretch md:flex-row mt-6 border shadow-lg ">
    
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <Card.Title className="pr-8 font-bold text-xl">adopted petName : {adop.petName}</Card.Title>
          <Card.Description>
           Adopted Date : {adop.depertureDate}
          </Card.Description>
          <CloseButton aria-label="Close banner" className="absolute top-3 right-3" />
        </Card.Header>
        <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">UserId : {adop.userId}</span>
            <p>AdoptionFee : ${adop.adoptionFee}</p>
           
          </div>
         <AdoptionDeleteModal adop={adop}></AdoptionDeleteModal>
        </Card.Footer>
      </div>
    </Card>
  );
}          