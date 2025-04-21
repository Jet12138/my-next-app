import { getPosts } from "@/api/posts";
import Post from "@/components/Post";
import { Suspense } from "react";

import type { PostType } from "@/components/Post";

import styles from "./styles.module.css";
export default async function Page() {
    const posts = await getPosts();

    return (
        <Suspense fallback={ <div>Loading...</div> }>
            <ul className={styles.blog}>
                {posts.map((post: PostType) => (
                    <Post key={post.id} post={post} />
                ))}
            </ul>
        </Suspense>
    );
}
