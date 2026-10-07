---
layout: doc
question: true
title: "How do you optimize images and fonts in Next.js?"
questionTitle: "How do you optimize images and fonts in Next.js?"
description: "Learn How do you optimize images and fonts in Next.js? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: hard
experienceLevel: senior
tags: ["frontend", "next-js"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Use `next/image` to generate responsive image sizes, prevent layout shift, and lazy-load noncritical images; use `next/font` to self-host and preload fonts without an external render-blocking request. Set dimensions and prioritize only the true LCP image."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/next-js/next-js-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "Next.js"
    link: /frontend-interview-questions/next-js/
  - label: "How do you optimize images and fonts in Next.js?"
prev:
  text: "How do you build responsive layouts without device-specific breakpoints?"
  link: "/frontend-interview-questions/css/css-question-10"
next:
  text: "When is Redux not a good fit?"
  link: "/frontend-interview-questions/redux/redux-question-10"
---
# How do you optimize images and fonts in Next.js?

## Answer

Use `next/image` to generate responsive image sizes, prevent layout shift, and lazy-load noncritical images; use `next/font` to self-host and preload fonts without an external render-blocking request. Set dimensions and prioritize only the true LCP image.

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

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
