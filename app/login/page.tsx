"use client"

import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { signIn } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Input from '@/components/Input';
import { Button } from '@/components/ui/button';

const LoginPage = () => {
    const router = useRouter();
    const [isLoading, setisLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setisLoading(true)
        signIn('credentials', {
            ...data,
            redirect: false,
        })
            .then((callback) => {
                setisLoading(false);

                if (callback?.ok) {
                    toast.success('Logged in');
                    router.refresh();
                    router.push("/");
                }

                if (callback?.error) {
                    toast.error(callback.error);
                }
            });
    }

    return (
        <div className="flex mt-10 items-center justify-center">
            <div className="bg-white px-4 py-4 rounded w-full md:w-2/5 flex justify-center mx-4">
                <div className='w-full lg:w-3/5'>
                    <h2 className="text-2xl font-semibold mb-4 head_text purple_gradient">Login Here!</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className='mb-4'>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <Input
                                id="email"
                                label='Email'
                                disabled={isLoading}
                                type="email"
                                register={register}
                                required
                                errors={errors}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <Input
                                id="password"
                                label='Password'
                                disabled={isLoading}
                                type="password"
                                register={register}
                                required
                                errors={errors}
                            />
                        </div>
                        <Button onClick={() => handleSubmit(onSubmit)} >Submit</Button>
                    </form>
                    <hr />
                    <div className="text-neutral-500 text-center mt-4 font-light">
                        <p>First time here?
                            <Link href="/register" className="text-dark-600 cursor-pointer hover:text-purple-900"> Create an account</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default LoginPage;
