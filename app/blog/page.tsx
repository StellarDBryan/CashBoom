
import { blogPosts } from '../api/data';
import { Jersey_15 } from 'next/font/google'; 
import { BlogPostCard } from '../components/ui/cards';

const jersey = Jersey_15({
    subsets: ["latin"], 
    weight: '400'
});

export default function Page(){
    return (
        <main className="w-full px-4 md:px-8 py-5 bg-gray-50">
            <h2 className={`${jersey.className} text-[2.3rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] text-green-700`}>
                Consejos Financieros
            </h2>
            <div className='mt-3 w-full flex flex-row flex-wrap items-center gap-3'>
                {blogPosts.map((post, id) => (
                    <BlogPostCard key={id} blogPost={post} />
                ))}
            </div>
        </main>
    );
}