## Landing page plan – Smaki Doliny Mrogi (MVP / walidacja)

### 0) Cel strony i definicja “sukcesu”
- **Cel główny**: pozyskać zapisy do newslettera (MailerLite) jako “early access” do zamówień.
- **Oferta**: świeże produkty od lokalnych rolników z okolic Doliny Mrogi:
  - wiejskie jaja,
  - mięso: drób (kury, koguty, brojlery, kaczki), wieprzowina, wołowina,
  - dziczyzna: dzik,
  - miód.
- **Wartość (1 zdanie)**: świeżość + lokalność + wygodna dostawa w wybrane dni.
- **Pozycjonowanie**: **swojsko-premium** (ciepłe i naturalne, ale estetyczne i “czyste”).
- **Co walidujemy**:
  - Czy ludzie chcą takiej oferty w obszarze dostaw.
  - Które miasta generują popyt.
  - Które kategorie produktów są najbardziej atrakcyjne.
- **KPI**:
  - **Signup rate** = zapisy / unikalni użytkownicy.
  - Zapisy wg miasta (segmentacja leadów).
  - CTR w hero (klik w CTA “Zapisz się”).
- **Progi robocze** (do interpretacji wyników):
  - \(>5\%\) signup rate: bardzo dobry sygnał.
  - \(2–5\%\): OK, iterujemy copy/kreacje.
  - \(<2\%\): zmiana komunikatu, kreatyw, targetu lub oferty.

---

### 1) Jedno zdanie o odbiorcy (persona)
- **Klient**: osoby indywidualne, które chcą jeść zdrowo, świeżo i swojsko, ale w standardzie premium.
- **Motywacje**: smak, jakość, pochodzenie, wygoda dowozu.
- **Obawy**: “czy to naprawdę dobre i świeże?”, “czy dowóz będzie wygodny?”, “czy to nie będzie scam?”.

---

### 2) Brand startowy (swojsko-premium)
#### 2.1 Logo
- Wybrany logotyp: `.ai/images/logo.png` (wordmark).

#### 2.2 Kolory (propozycja)
- **Leśna zieleń**: `#1F3A2E` (główne akcenty, CTA/ikonografia).
- **Miodowe złoto**: `#C89B3C` (detale premium, podkreślenia).
- **Krem**: `#F6F0E3` (tła sekcji, “papier”).
- **Ciepły brąz**: `#3B2A1A` (tekst / elementy “swojskie”).

#### 2.3 Typografia (propozycja)
- **Nagłówki**: elegancki szeryf (np. Playfair Display / Cormorant).
- **Tekst**: nowoczesny sans (np. Inter).
- Zasada: prosto, czytelnie, dużo oddechu.

#### 2.4 Ton języka
- Ciepło, “po ludzku”, bez przesadnej gwary.
- Premium przez estetykę i spokój, nie przez snobizm.
- Unikać obietnic “eko certyfikowane” jeśli nie ma certyfikatów.

---

### 3) Informacja architektura (sekcje i kolejność)
Landing jest **jednostronicowy**, bez koszyka i bez kontaktu (na teraz tylko newsletter).

#### Sekcja A – Top bar (sticky, minimalistyczny)
- Po lewej: logo `.ai/images/logo.png`.
- Po prawej: przycisk/CTA “Zapisz się (-25%)”.
- Link kotwica: “Obszar dostaw”.

#### Sekcja B – Hero (pierwszy ekran)
**Cele**: natychmiast wyjaśnić wartość + popchnąć do zapisu.
- Elementy:
  - H1 (nagłówek) + podnagłówek.
  - 3 krótkie benefity (ikonki).
  - Główne CTA (scroll do formularza).
  - Drugie CTA “Sprawdź obszar dostaw” (scroll do sekcji z miastami).
  - Wizual: zdjęcie tła/cover (może być `.ai/images/pole.jpg` jako tło z przyciemnieniem).

**Propozycje H1 (wybierz 1 na start; reszta do testów A/B):**
1) „Swojskie smaki z Doliny Mrogi. Świeżo. Lokalnie. Z dowozem.”
2) „Produkty od lokalnych gospodarzy — jakość premium z dowozem pod drzwi.”
3) „Jedz świeżo i po swojemu — jaja, mięso i miód z dowozem.”

**Podnagłówek (wspólny):**
„Startujemy wkrótce. Zapisz się, a dostaniesz **pierwszy dostęp do zamówień** i **-25% na pierwsze zamówienie** (kod: `START25`).”

**Benefity (3 bullet):**
- „Prosto od rolników z okolic Doliny Mrogi”
- „Świeżość, którą czuć w smaku”
- „Dostawa do domu lub pracy w wybrane dni”

**CTA w hero:**
- Primary: „Zapisz się i odbierz -25%”
- Secondary: „Sprawdź obszar dowozu”

#### Sekcja C – “Dlaczego my” (wyróżniki zaufania)
**Cele**: zbudować wiarygodność, bez opinii/certyfikatów (bo ich jeszcze nie ma).
- Układ: 4 kafelki/kolumny.
- Treść (przykład):
  1) **Lokalnie**: “Wspieramy małych producentów z okolic Doliny Mrogi.”
  2) **Świeżo**: “Towar dobierany pod dostawy — bez ‘leżaków’ z magazynu.”
  3) **Premium, ale naturalnie**: “Prosty skład, czysty smak, wysoka jakość.”
  4) **Wygodnie**: “Wybierasz dzień dostawy, my dowozimy pod adres.”

#### Sekcja D – Oferta (kategorie produktów)
**Cele**: pokazać co będzie dostępne i pod co ludzie się zapisują.
- Układ: 4 kafelki z mini-opisem i mikro-CTA “Chcę dostać info o starcie”.
- Kafelki:
  - **Wiejskie jaja**: “Świeże, od lokalnych gospodarzy.”
  - **Mięso (drób / wieprzowina / wołowina)**: “Jakość premium do codziennej kuchni.”
  - **Dziczyzna (dzik)**: “Dla tych, którzy chcą smaku ‘jak dawniej’.”
  - **Miód**: “Naturalna słodycz prosto od pszczelarzy.”

**Uwaga**: bez cen na MVP; celem jest zapis.

#### Sekcja E – Jak to będzie działać (proces dowozu)
**Cele**: odczarować logistykę, pokazać prostotę.
- Układ: 3 kroki + ikonki.
- Copy:
  1) “Wybierasz produkty, które chcesz zamówić”
  2) “Wybierasz dzień dostawy (2–3 dni w tygodniu)”
  3) “Dostarczamy do domu lub pracy”
- Pod spodem: mini-CTA do newslettera:
  - “Zapisz się, a damy znać jako pierwsi, gdy ruszą zamówienia.”

#### Sekcja F – Obszar dostaw (sekcja walidacyjna)
**Cele**: jasno powiedzieć gdzie dowozimy i zebrać dane (miasto).
- Miasta:
  - Warszawa
  - Żyrardów
  - Skierniewice
  - Łódź
  - Brzeziny i okolice
  - Andrespol i okolice
- Wizual: prosta mapka/ilustracja (może być wygenerowana) + lista.
- Mikrocopy:
  - “Jesteś spoza tych miast? Zapisz się — damy znać, gdy rozszerzymy obszar.”

#### Sekcja G – Newsletter (główny formularz zapisu)
**Cele**: maksymalna konwersja + jasne benefity + zgodność prawna.
- Nagłówek:
  - „Pierwszy dostęp do zamówień + -25% na start”
- Podnagłówek:
  - „Wyślemy Ci info o starcie zamówień i terminach dostaw. Kod rabatowy: `START25`.”
- Formularz:
  - email (wymagane)
  - miasto/obszar (opcjonalne, ale rekomendowane; dropdown)
  - checkbox zgody marketingowej (RODO; wymagany jeśli potrzeba)
- CTA button:
  - „Chcę -25% i info o starcie”
- Trust note pod formularzem:
  - “Zero spamu. Tylko info o starcie i dostępności.”

#### Sekcja H – FAQ (6–8 pytań)
Propozycje:
1) Skąd są produkty?
2) Kiedy dostawy?
3) Czy dostarczacie do pracy?
4) Jakie miasta obsługujecie?
5) Jak działa rabat -25%?
6) Kiedy ruszą zamówienia?
7) Co będzie w ofercie na start?
8) Czy mogę wypisać się w każdej chwili?

#### Sekcja I – Stopka (minimum)
- “Smaki Doliny Mrogi”
- Link do polityki prywatności + informacja o MailerLite jako procesorze danych (w polityce).
- Krótka notka: “Newsletter obsługiwany przez MailerLite.”

---

### 4) Integracja newslettera (MailerLite) – specyfikacja
#### 4.1 Struktura w MailerLite
- Lista/Grupa: `early-access` (lub podobna)
- Tag (opcjonalnie): `landing-mvp`
- Pole dodatkowe (opcjonalne, ale rekomendowane):
  - `city` (wartości: Warszawa, Żyrardów, Skierniewice, Łódź, Brzeziny i okolice, Andrespol i okolice, Inne)

#### 4.2 Formularz
- Embedded form osadzony na stronie (w 2 miejscach):
  1) w hero (krótka wersja / modal po kliknięciu CTA),
  2) pełna sekcja newslettera (główna).
- Jeśli 2 formularze: oba zapisują do tej samej grupy/tagu.

#### 4.3 Automatyzacje (minimum)
1) **Email powitalny (natychmiast)**
   - Temat: “Dzięki za zapis — Twój rabat -25% `START25`”
   - Treść: potwierdzenie + co dalej (info o starcie) + przypomnienie obszaru dostaw.
2) **Email startowy (w dniu uruchomienia zamówień)**
   - Temat: “Start zamówień — wybierz dzień dostawy”
   - Treść: link do sklepu / instrukcja zamówienia (gdy będzie gotowe).

#### 4.4 Zasady rabatu (MVP)
- Kod wspólny: `START25`
- Komunikacja na stronie:
  - “Kod zadziała przy pierwszym zamówieniu po starcie.”
- Komunikacja w mailu:
  - “Zapisz kod: `START25`. Użyjesz go w pierwszym zamówieniu.”

---

### 5) Analityka (żeby walidacja była policzalna)
#### 5.1 Zdarzenia, które warto śledzić
- `cta_click_hero` – klik w CTA w hero
- `cta_click_area` – klik “Sprawdź obszar dowozu”
- `newsletter_view` – wejście w sekcję newslettera (scroll)
- `newsletter_submit` – wysłanie formularza (z sukcesem)
- `faq_expand` – rozwinięcia FAQ (opcjonalnie)

#### 5.2 Segmentacja leadów
- Miasto/obszar z formularza (najważniejsze do decyzji logistycznych).

---

### 6) Specyfikacja UI/UX (żeby dało się “od razu zrobić stronę”)
#### 6.1 Layout i zasady
- Strona szybka, jednokolumnowa, dużo whitespace.
- Sekcje naprzemiennie: kremowe tło / białe tło, delikatne separatory.
- CTA powtarzać 3 razy:
  - w hero,
  - po sekcji “Jak to działa”,
  - w głównej sekcji newslettera.
- Sticky top bar z CTA, żeby zawsze można było się zapisać.

#### 6.2 Komponenty (lista implementacyjna)
- `HeaderNav` (logo + CTA + anchor link)
- `Hero` (H1, podnagłówek, benefity, CTA, tło)
- `ValueProps` (4 kafelki)
- `OfferGrid` (4 kafelki produktów)
- `HowItWorks` (3 kroki)
- `DeliveryArea` (mapka/ilustracja + lista miast)
- `NewsletterSignup` (MailerLite embed + disclaimer)
- `FAQAccordion`
- `Footer` (policy links)

#### 6.3 Stany i mikrointerakcje
- Po kliknięciu CTA: smooth scroll do formularza.
- Po zapisie: stan sukcesu (tekst “Dzięki! Sprawdź skrzynkę…”).
- Walidacja email w przeglądarce (minimum).

#### 6.4 Dostępność (minimum)
- Kontrast CTA i tekstów.
- Fokus na elementach formularza.
- Alt text dla obrazów.
- FAQ jako prawdziwe przyciski z aria-expanded.

---

### 7) Assets (co trzeba mieć / wygenerować)
#### 7.1 Już dostępne
- Logo: `.ai/images/logo.png`
- Zdjęcie pola: `.ai/images/pole.jpg` (może posłużyć jako hero background)

#### 7.2 Do wygenerowania (brief dla obrazów)
Styl: ciepłe światło, naturalne tła (len/drewno/papier), premium minimalizm.
- Jaja (zbliżenie, koszyk, naturalne tło)
- Mięso (estetyczne ujęcia: drób, wołowina, wieprzowina – bez “krwistego” przesytu)
- Dziczyzna (subtelnie, premium)
- Miód (słoik, łyżka, plastry, złote światło)
- Prosta mapka/ilustracja obszaru (Warszawa–Łódź i okolice) – “schemat”, nie geodezja
- Ikonki line-art (lokalnie / świeżo / dowóz / premium)

---

### 8) SEO i metadane (minimum)
- Title:
  - “Smaki Doliny Mrogi – świeże produkty od rolników z dowozem”
- Description:
  - “Wiejskie jaja, mięso i miód od lokalnych gospodarzy. Zapisz się, by dostać info o starcie zamówień i -25% na pierwsze zamówienie.”
- OpenGraph:
  - obraz: hero (pole + logo)
- Struktura H1/H2 zgodna z sekcjami.

---

### 9) Copy checklist (żeby landing był spójny)
- W każdym miejscu konsekwentnie: **“startujemy wkrótce”**, **“zapisz się”**, **“-25% `START25`”**.
- Nie wspominać o ograniczonej ilości produktów.
- Nie obiecywać sklepu “już działa” (raczej: “zamówienia ruszą wkrótce”).
- Unikać “eko” jako certyfikatu, jeśli brak potwierdzeń – lepiej “lokalnie”, “od gospodarzy”, “świeżo”.

---

### 10) Minimalny zestaw stron/dokumentów obok landing (rekomendacja)
Do poprawnego wdrożenia (zwłaszcza newsletter/RODO) przyda się jeszcze:
- `Polityka prywatności` (krótka, może być 1 strona) – kto administruje danymi, cel, MailerLite, prawa użytkownika.
- (Opcjonalnie) `Regulamin newslettera` – 5–10 punktów.

---

### 11) Plan testów A/B (po uruchomieniu)
Jeśli jest ruch, testować tylko jedną rzecz naraz:
- A/B nagłówka hero (3 warianty z sekcji Hero)
- CTA copy:
  - “Zapisz się i odbierz -25%”
  - “Chcę -25% na start”
- Układ: formularz w hero vs przycisk otwierający modal.

---

### 12) “Definition of done” dla wygenerowania strony w kolejnej sesji
Strona jest gotowa, gdy:
- Ma wszystkie sekcje A–I.
- CTA scrolluje do formularza.
- Formularz MailerLite zapisuje do grupy `early-access`.
- Po zapisie jest czytelny komunikat sukcesu.
- Jest polityka prywatności (link w stopce).
- Wpięta analityka i zdarzenie `newsletter_submit`.

