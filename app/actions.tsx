"use server";
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { useActionState } from 'react';


export async function createPost(formData: FormData) {
    const title = formData.get("title");
    const content = formData.get("content");

    // Update data
    // return new Promise((resolve) =>{
    //     // Revalidate cache
    //     revalidatePath('/posts')
    //     // redirect the user to a different page after performing an update
    //     redirect('/posts');

    //     resolve({
    //         title,
    //         content,
    //         author: 'John Doe',
    //         tags: ['nextjs', 'react', 'nodejs'],
    //     })
    // })



    const res = await fetch('https://api.vercel.app/posts', {
        method: 'POST',
        body: {
            title,
            content,
        },
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })

    const json = await res.json();
    if(!res.ok) {
        // throw new Error('Failed to create post')
        return {
            message: "Failed to create post",
            error: json.message,
        }
    }else{
        // revalidatePath('/posts')
        // redirect('/posts');
        return json;
    }
}


export async function incrementLike(num: number) {
    return num += 1;
}
