import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { email, city } = body;

    // Validate email
    if (!email || typeof email !== 'string') {
      return new Response(JSON.stringify({ error: 'Email jest wymagany.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Nieprawidłowy adres e-mail.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const apiKey = import.meta.env.MAILERLITE_API_KEY;
    if (!apiKey) {
      console.error('MAILERLITE_API_KEY is not set');
      return new Response(JSON.stringify({ error: 'Błąd konfiguracji serwera.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // MailerLite API v2 — add subscriber
    const mlResponse = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email,
        fields: {
          city: city || '',
        },
        groups: ['179554260132824667'],
      }),
    });

    if (!mlResponse.ok) {
      const mlError = await mlResponse.text();
      console.error('MailerLite API error:', mlResponse.status, mlError);
      return new Response(JSON.stringify({ error: 'Nie udało się zapisać. Spróbuj ponownie.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Subscribe endpoint error:', err);
    return new Response(JSON.stringify({ error: 'Wewnętrzny błąd serwera.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
