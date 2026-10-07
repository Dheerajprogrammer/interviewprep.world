---
layout: doc
question: true
title: "What is static generation versus server-side rendering?"
questionTitle: "What is static generation versus server-side rendering?"
description: "Learn What is static generation versus server-side rendering? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: easy
experienceLevel: junior
tags: ["frontend", "next-js"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Static generation creates HTML ahead of time and is fast to serve from a CDN; server-side rendering produces it per request when data is user-specific or highly dynamic. Revalidation offers a middle ground for data that can be briefly stale."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/next-js/next-js-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "Next.js"
    link: /frontend-interview-questions/next-js/
  - label: "What is static generation versus server-side rendering?"
prev:
  text: "What is the cascade layer feature?"
  link: "/frontend-interview-questions/css/css-question-9"
next:
  text: "How do you avoid unnecessary Redux re-renders?"
  link: "/frontend-interview-questions/redux/redux-question-9"
---
# What is static generation versus server-side rendering?

## Answer

Static generation creates HTML ahead of time and is fast to serve from a CDN; server-side rendering produces it per request when data is user-specific or highly dynamic. Revalidation offers a middle ground for data that can be briefly stale.

## Example

```tsx
// app/products/[id]/page.tsx
export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)
  return <h1>{product.name}</h1>
}
```

A Server Component can fetch data close to the route without shipping that data-access code to the browser.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
