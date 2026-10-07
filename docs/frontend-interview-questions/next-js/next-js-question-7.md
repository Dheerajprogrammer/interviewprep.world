---
layout: doc
question: true
title: "How do dynamic routes work in Next.js?"
questionTitle: "How do dynamic routes work in Next.js?"
description: "Learn How do dynamic routes work in Next.js? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: hard
experienceLevel: senior
tags: ["frontend", "next-js"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Folders such as `[id]` create a parameterized route, while `[...slug]` captures multiple segments. Validate route parameters before using them and return `notFound()` or a controlled error for invalid resources."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/next-js/next-js-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "Next.js"
    link: /frontend-interview-questions/next-js/
  - label: "How do dynamic routes work in Next.js?"
prev:
  text: "What are CSS custom properties?"
  link: "/frontend-interview-questions/css/css-question-7"
next:
  text: "What is middleware?"
  link: "/frontend-interview-questions/redux/redux-question-7"
---
# How do dynamic routes work in Next.js?

## Answer

Folders such as `[id]` create a parameterized route, while `[...slug]` captures multiple segments. Validate route parameters before using them and return `notFound()` or a controlled error for invalid resources.

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
