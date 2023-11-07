export async function validateEmail(email)
{
    const apiKey = import.meta.env.VITE_ABSTRACT_API_KEY;
    console.log(import.meta.env.FIREBASE_API_KEY);

    const resp = await fetch(`https://emailvalidation.abstractapi.com/v1/?api_key=${apiKey}&email=${email}`);
    const respInJSON = await resp.json();
    return respInJSON;
}