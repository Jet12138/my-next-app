'use client'
import { createPost } from '../actions';
import {useActionState} from 'react'
import { LoadingSpinner } from './loading-spinner'

export function Button() {
    const [state, action, pending] = useActionState(createPost, false)

    return (
        // <button formAction={createPost}>Create</button>

        <button onClick={ async () => action() }>
            { pending ? <LoadingSpinner/> : 'Create Post' }
        </button>
    )
}
