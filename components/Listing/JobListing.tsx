"use client"

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useModal } from '@/provider/use-modal-store';
import { Listing } from '@prisma/client';

interface JobListing {
    jobListings: Listing[]
}

const JobListing = ({ jobListings }: JobListing) => {
    const { onOpen } = useModal();

    return (
        <div className='flex sm:flex-row flex-col flex-wrap justify-center'>
            {jobListings.length === 0 && <div>No jobs right now</div>}
            {jobListings.map((job) => (
                <Card className='sm:w-1/4 w-full my-3 sm:m-4 flex flex-col justify-between' key={job.id}>
                    <CardHeader>
                        <CardTitle>{job.title}</CardTitle>
                        <CardDescription>{job.location}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>{job.description}</p>
                    </CardContent>
                    <CardFooter>
                        <div className='flex-col space-y-4 w-full'>
                            <Button onClick={() => onOpen("apply", { job })}>Apply</Button>
                        </div>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}

export default JobListing