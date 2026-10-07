---
layout: doc
question: true
title: "What is the difference between the App Router and Pages Router?"
questionTitle: "What is the difference between the App Router and Pages Router?"
description: "Learn What is the difference between the App Router and Pages Router? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: medium
experienceLevel: mid
tags: ["frontend", "next-js"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "The App Router uses nested layouts, React Server Components, and conventions such as `page.tsx`; the Pages Router uses the older `pages/` directory and data-fetching functions. New applications generally use the App Router, while the Pages Router remains supported for existing apps."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/next-js/next-js-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "Next.js"
    link: /frontend-interview-questions/next-js/
  - label: "What is the difference between the App Router and Pages Router?"
prev:
  text: "What is the CSS box model?"
  link: "/frontend-interview-questions/css/css-question-2"
next:
  text: "What are actions, reducers, and the store?"
  link: "/frontend-interview-questions/redux/redux-question-2"
---
# What is the difference between the App Router and Pages Router?

## Answer

The App Router uses nested layouts, React Server Components, and conventions such as `page.tsx`; the Pages Router uses the older `pages/` directory and data-fetching functions. New applications generally use the App Router, while the Pages Router remains supported for existing apps.

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
