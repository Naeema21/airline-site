'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Callback() {
    const router = useRouter();
    //   const { code } = router;
    const code = 1
    useEffect(() => {
        if (code) {
            fetch('/api/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ code }),
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to authenticate');
                    }
                    return response.json();
                })
                .then(data => {
                    // Store the token and redirect to payment page
                    router.push('/');
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [code, router]);

    return <p>Loading...</p>;
}
