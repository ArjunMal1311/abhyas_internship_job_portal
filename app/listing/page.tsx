import JobListing from '@/components/Listing/JobListing';
import getAllListings from '../actions/getListing';


export default async function JobListings() {
    const jobListings = await getAllListings();
    return (
        <div className="min-h-screen">
            <main className="container mx-auto p-4">
                <div className="overflow-x-auto text-center">
                    <div className='p-4'>
                        <h4 className='px-2 text-4xl font-bold'>Lets find you a job!</h4>
                    </div>
                    <JobListing jobListings={jobListings} />

                </div>
            </main>

        </div>
    );
}
