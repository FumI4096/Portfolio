interface ContactData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

// You can configure VITE_API_URL in your frontend .env file or Vercel dashboard to change it dynamically.
const API_ENDPOINT = import.meta.env.VITE_API_URL || "https://portfolio-api-teal.vercel.app/api/contact";

export async function sendContactMessage(data: ContactData): Promise<{ success: boolean; message: string }> {
    const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Failed to send message");
    }

    return response.json();
}
