"use client";

import { useActionState } from "react";
import { createPost } from "../actions";
import formcss from "./formcss.module.css";

const initialState = {
    message: "",
};

export function Form() {
    const [state, formAction, pending] = useActionState(
        createPost,
        initialState
    );

    return (
        <form action={formAction} className={formcss.borderccc} >
            <h1>表单标题</h1>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required className={formcss.borderccc} />
            <br />

            <label htmlFor="content">Content</label>
            <textarea id="content" name="content" required className={formcss.borderccc} />
            <br />
            { state?.message && <p aria-live="polite">{state.message}</p> }
            <button type="submit">Create</button>
        </form>
    );
}
