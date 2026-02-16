# Smaki Doliny Mrogi

Landing page walidacyjny — pozyskiwanie zapisów do newslettera.

## Uruchomienie lokalne

```bash
npm install
cp .env.example .env   # uzupełnij MAILERLITE_API_KEY
npm run dev
```

Strona dostępna pod `http://localhost:4321`.

## Zmienne środowiskowe

| Zmienna             | Opis                        |
|---------------------|-----------------------------|
| `MAILERLITE_API_KEY` | Klucz API MailerLite (Bearer token) |

## Deploy na Vercel

1. Połącz repozytorium z Vercel.
2. Ustaw zmienną `MAILERLITE_API_KEY` w Settings → Environment Variables.
3. Vercel automatycznie wykryje Astro i zastosuje adapter.

## Build

```bash
npm run build
npm run preview
```
