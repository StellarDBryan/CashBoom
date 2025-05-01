"use client";

import { Jersey_15 } from 'next/font/google'; 
import { challenges } from '../api/data';
import { ChallengeCard } from '../components/ui/cards';

const jersey = Jersey_15({
    subsets: ["latin"], 
    weight: '400'
});

export default function Page() {
    return (
        <main className='w-full px-4 md:px-8 py-5 bg-gray-50'>
            <h2 className={`${jersey.className} text-[3.8rem] text-green-700`}>
                Retos
            </h2>
            <div className='w-full flex flex-row flex-wrap gap-3'>
                {challenges.map((challenge, id) => (
                    <ChallengeCard key={id} challenge={challenge} />
                ))}
            </div>
        </main>
    );
}