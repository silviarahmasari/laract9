import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';
import { Inertia } from '@inertiajs/inertia';

export default function EditNews(props) {
    console.log('props: ', props);
    return (
        <div className='min-h-screen bg-slate-50'>
            <Head title={props.title}/>
            <Navbar user={props.auth.user}/>
                <div className="m-2 card w-full lg:w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <input className="card-title" value={props.myNews.title} />
                        <input className="card-title" value={props.myNews.description} />
                        <input className="card-title" value={props.myNews.category} />
                        
                    </div>
                </div>
        </div>
    )
}
