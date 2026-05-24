"use client"

import { authClient } from '@/lib/auth-client';
import { Button, Card, Description, FieldError, Form, Input, Label, Separator, TextField } from '@heroui/react';
import { redirect } from 'next/navigation';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';


const SignUp = () => {
    const onSubmit = async (e) =>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());
        console.log(user);
        const { data, error } = await authClient.signUp.email({
        name:user.name,    
        email : user.email ,
        password : user.password
    })
    console.log({data,error});
    if(data){
        redirect("/")
    }
    if(error){
        toast.error("No Data Found")
    }
    }
    const handalGoogleSignIn = async ()=>{
       await authClient.signIn.social({
        provider:"google"
       })
    }
    return (
        <div className='max-w-7xl mx-auto mt-10'>
            <h2 className='text-center font-bold text-2xl mb-2'>Create Account</h2>
            <Card className='p-10 shadow-xl'>
            <Form onSubmit={onSubmit} className="flex w-96 flex-col gap-4  ">
                <TextField
                    isRequired
                    name="name"
                    type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter Your Name" />
                    <FieldError />
                </TextField>

                <TextField
                    isRequired
                    name="email"
                    type="email">
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password">
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                    <FieldError />
                </TextField>
                <div className="">
                    <Button type="submit" className='w-full rounded-sm bg-[linear-gradient(90deg,#ff8a3d_0%,#ff6b00_45%,#3b82f6_100%)] text-white px-2 p-2 rounded-2xl text-sm font-semibold shadow-lg hover:scale-105 transition duration-300'>
                        Create Account
                    </Button>
                </div>
            </Form>
            <div className='flex justify-between items-center w-30 gap-3'>
            <Separator></Separator>
            <p className='whitespace-nowrap '>Or sign up with</p>
            <Separator></Separator>

            </div>
            <div>
                <Button onClick={handalGoogleSignIn} variant='outline' className="w-full rounded-sm hover:scale-105 transition duration-300"><FcGoogle/> Sign in with Google</Button>
            </div>
             </Card>
        </div>
    );
};

export default SignUp;