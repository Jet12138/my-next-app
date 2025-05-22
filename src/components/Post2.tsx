'use client'
import { use } from 'react'
import { useRouter } from 'next/navigation'
import styleText from"@/css/styleText.module.css"
export default function Post({
    posts,
}:{
    posts: Promise<{
        userId: number;
        id: number;
        title: string;
        body: string;
        [prop: string]: any | string;
    }[] >
}){
    console.log('Line 19', posts);
    const allPosts = use(posts)
    console.log('%c [ allPosts ]-21', 'font-size:13px; background:pink; color:#bf2c9f;', allPosts)

    const router = useRouter();
    return (
        <>
            <h2>
                <button className={styleText.blue} onClick={()=>{ router.back()} }>
                    返回上一级
                </button>
            </h2>
            <ul>
                {allPosts.map( (post) =>(
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </>

    )
}
