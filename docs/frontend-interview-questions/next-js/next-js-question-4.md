---
layout: doc
question: true
title: "When do you use a Server Component versus a Client Component?"
questionTitle: "When do you use a Server Component versus a Client Component?"
description: "Learn When do you use a Server Component versus a Client Component? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: hard
experienceLevel: senior
tags: ["frontend", "next-js"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Use a Server Component by default for data access, secure server-only logic, and non-interactive UI. Add `use client` only at the smallest interactive boundary that needs state, effects, event handlers, or browser APIs."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/next-js/next-js-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "Next.js"
    link: /frontend-interview-questions/next-js/
  - label: "When do you use a Server Component versus a Client Component?"
prev:
  text: "How do stacking contexts work?"
  link: "/frontend-interview-questions/css/css-question-4"
next:
  text: "What is Redux Toolkit?"
  link: "/frontend-interview-questions/redux/redux-question-4"
---
# When do you use a Server Component versus a Client Component?

## Answer

Use a Server Component by default for data access, secure server-only logic, and non-interactive UI. Add `use client` only at the smallest interactive boundary that needs state, effects, event handlers, or browser APIs.

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
