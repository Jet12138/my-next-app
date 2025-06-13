"use client";

import React, { useEffect } from "react";

export default function ErrorComponent({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error resporting service
        console.error(error);
    }, [error]);

    return (
        <div>
            <h1>Error Occurred!</h1>
            <p>Something went wrong.</p>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again!
            </button>
        </div>
    );
}
