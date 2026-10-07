---
layout: doc
question: true
title: "How do you handle loading and error states in the App Router?"
questionTitle: "How do you handle loading and error states in the App Router?"
description: "Learn How do you handle loading and error states in the App Router? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: medium
experienceLevel: mid
tags: ["frontend", "next-js"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Add `loading.tsx` for a route-level loading UI and `error.tsx` as a client error boundary for rendering failures. Keep the fallback close to the affected segment so unaffected layouts remain responsive."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/next-js/next-js-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "Next.js"
    link: /frontend-interview-questions/next-js/
  - label: "How do you handle loading and error states in the App Router?"
prev:
  text: "How do you prevent layout shift with CSS?"
  link: "/frontend-interview-questions/css/css-question-8"
next:
  text: "What is normalized state?"
  link: "/frontend-interview-questions/redux/redux-question-8"
---
# How do you handle loading and error states in the App Router?

## Answer

Add `loading.tsx` for a route-level loading UI and `error.tsx` as a client error boundary for rendering failures. Keep the fallback close to the affected segment so unaffected layouts remain responsive.

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

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
