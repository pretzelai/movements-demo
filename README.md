# Movements.mov clone (Next.js)

Pixel-faithful reproduction of the Spanish homepage at https://movements.mov/es
built with Next.js 15 (App Router), Tailwind CSS, TypeScript.

> **Note:** This is a study / reference build. The content, branding, images
> and copy belong to MOVEMENTS. Do not deploy publicly without permission.

## Stack
- Next.js 15 + React 18
- Tailwind CSS 3
- TypeScript
- `next/font` (Anton, Caveat, Inter)
- `lucide-react` for icons

## Run

```bash
npm install
npm run dev   # http://localhost:3000
npm run build # production build
npm start     # serve production build
```

## Structure

```
app/
  layout.tsx        # fonts + metadata
  page.tsx          # full homepage (hero + sections)
  globals.css
components/
  Header.tsx
  Footer.tsx
  Button.tsx
  UsersCounter.tsx          # animated Movers counter
  AvatarGrid.tsx            # decorative grid
  SubscriptionCarousel.tsx  # fan-card carousel (client)
public/images/      # all assets downloaded from movements.mov
```

## Sections replicated
1. Sticky header with gradient stripe + logo + auth buttons
2. Hero ("Empieza el movimiento") with full-bleed image + gradient CTA
3. "Todo-en-uno" split content + mockup
4. Protest silhouette separator
5. "Comunidad de Movers" with animated counter + avatar grid
6. "Plataforma abierta con valores" with background image
7. "Todo lo que generas es tuyo" split + mockup
8. "Llega a más gente" (dark background)
9. "Un nuevo modelo de sostenibilidad" with mockup
10. Support / fan-card subscription carousel
11. Gradient footer with socials + legal links
