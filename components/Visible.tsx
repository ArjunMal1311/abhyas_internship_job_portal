"use client"
import React, { useState } from 'react';

const Alert = () => {
    const [visible, setVisible] = useState(true);

    const handleClose = () => {
        setVisible(false);
    };

    return (
        visible && (
            <div className="bg-green-200 text-green-700 p-4 flex  justify-between items-center">
                <div className='flex sm:flex-row flex-col text-center w-full'>
                    <p className='mx-2'>This is sample website</p>
                    <p className='mx-2'>You can access admin account</p>
                    <p className='font-bold mx-2'>Email-admin@admin.com</p>
                    <p className='font-bold mx-2'>Password-admin</p>
                </div>
                <button onClick={handleClose}>&times;</button>
            </div>
        )
    );
};

export default Alert;
