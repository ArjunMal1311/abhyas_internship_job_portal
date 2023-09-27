import FormAddJob from '@/components/FormAddJob';
import { getCurrentUser } from '../actions/getCurrentUser';

const ServerForm = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return null;
    }

    return (
        <div>
            {currentUser.currentUser.isAdmin && <>
                <div className="flex items-center mt-10 h-screen flex-col">
                    <div className='text-2xl font-bold'>
                        Add Job Listing
                    </div>
                    <div className='w-1/4'>
                        <FormAddJob currentUser={currentUser.currentUser} />
                    </div>
                </div></>}
        </div>
    );
}

export default ServerForm;
