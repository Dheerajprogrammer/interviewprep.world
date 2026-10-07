---
layout: doc
question: true
title: "How does Next.js data fetching and caching work?"
questionTitle: "How does Next.js data fetching and caching work?"
description: "Learn How does Next.js data fetching and caching work? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: medium
experienceLevel: mid
tags: ["frontend", "next-js"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "In the App Router, server-side `fetch` calls can be memoized and cached according to their options; routes can be static, dynamic, or revalidated. Choose caching deliberately and invalidate or revalidate after mutations rather than assuming fresh data."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/next-js/next-js-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "Next.js"
    link: /frontend-interview-questions/next-js/
  - label: "How does Next.js data fetching and caching work?"
prev:
  text: "What is the difference between relative, absolute, fixed, and sticky positioning?"
  link: "/frontend-interview-questions/css/css-question-5"
next:
  text: "What is a selector?"
  link: "/frontend-interview-questions/redux/redux-question-5"
---
# How does Next.js data fetching and caching work?

## Answer

In the App Router, server-side `fetch` calls can be memoized and cached according to their options; routes can be static, dynamic, or revalidated. Choose caching deliberately and invalidate or revalidate after mutations rather than assuming fresh data.

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
