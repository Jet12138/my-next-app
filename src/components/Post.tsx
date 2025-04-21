import React from "react";
import Link from "next/link";
import Image from "next/image";

import { getPosts } from '@/api/posts'

export interface PostType{
    title: string;
    body: string;
    id: number;
    [propName: string]: string | number;
}
export interface Props {
    post: PostType
}
// export default function Post({ post }: Props) {
//     return (
//         <li key={post.slug}>
//             {/* <h2>{post.title}</h2> */}
//             <Link href={`/blog/${post.title}`}>{ post.title }</Link>
//             <br />
//             <hr />
//             <p>{post.body}</p>
//         </li>
//     )
// }



export default async function Post({
    post
}:{
    post: PostType
}) {
    const posts = await getPosts()
    return (
        <>
            <Link href="/">Home</Link>
            <ul>
                {posts.map((post: PostType) => (
                    <li key={post.id}>
                        <Image
                            width={300}
                            height={200}
                            src="https://placecats.com/neo/300/200"
                            alt="Neo"
                        />
                        <br/>
                        <p>{post.title}</p>
                        <br/>
                    </li>
                ))}
            </ul>
        </>

    )
}
