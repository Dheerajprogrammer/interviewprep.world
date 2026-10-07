---
layout: doc
question: true
title: "Explain the useEffect Hook"
questionTitle: "Explain the useEffect Hook"
description: "Learn React useEffect interview questions with answers, examples, performance considerations and real interview scenarios."
difficulty: medium
experienceLevel: mid
tags: ["react", "hooks", "useEffect", "side-effects"]
updated: 2026-10-06
readingMinutes: 2
answerExcerpt: "useEffect runs side effects after render—data fetching, subscriptions, and DOM sync—controlled by a dependency array with optional cleanup."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/hooks/use-effect"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "Hooks"
    link: /react-interview-questions/hooks/
  - label: "Explain the useEffect Hook"
prev:
  text: "What is the Virtual DOM?"
  link: "/react-interview-questions/basics/virtual-dom"
next:
  text: "Where should state live in a React application?"
  link: "/react-interview-questions/state-management/state-management-question-1"
---
# Explain the useEffect Hook

## Answer

`useEffect` schedules **side effects** after React commits DOM updates. Typical uses include fetching data, subscribing to events or stores, and synchronizing with non-React code.

- **No dependency array** — runs after every render.
- **`[]`** — runs after mount (and cleanup before unmount). In Strict Mode (dev), effects may run twice to surface unsafe side effects.
- **`[deps]`** — runs when dependencies change; cleanup runs before re-running the effect.

## Code Examples

```jsx
import { useEffect, useState } from 'react'

export function UserProfile({ userId }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    let cancelled = false
    fetch(`/api/users/${userId}`)
      .then(r => r.json())
      .then(data => {
        if (!cancelled) setUser(data)
      })
    return () => {
      cancelled = true
    }
  }, [userId])

  return user ? <p>{user.name}</p> : null
}
```

```jsx
useEffect(() => {
  const id = setInterval(tick, 1000)
  return () => clearInterval(id)
}, [tick])
```

## Common Mistakes

- Missing dependencies (stale closures) or over-including objects that change every render (infinite loops).
- Using `useEffect` for derived state instead of computing during render.
- Omitting cleanup for subscriptions, timers, or pending fetches.

## Follow-up Questions

- Difference between `useEffect` and `useLayoutEffect`?
- How do you cancel async work on unmount?
- When would you use an event handler instead of an effect?

## Real Interview Scenarios

Interviewers often present a component with an infinite re-render loop or a memory leak from a missing cleanup and ask you to fix it live.
