'use client';

export default function Error({ error }) {
    return (
        <main className="error">
            <p>{error.message}</p>
        </main>
    );
}