---
layout: doc
question: true
title: "How do HTTP interceptors work?"
questionTitle: "How do HTTP interceptors work?"
description: "Learn How do HTTP interceptors work? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: easy
experienceLevel: junior
tags: ["angular", "services"]
updated: 2026-10-06
readingMinutes: 4
answerExcerpt: "An interceptor wraps outgoing requests and incoming responses in a chain. Use it for cross-cutting concerns such as authentication headers, tracing, retries, and centralized error translation, while avoiding feature-specific business rules."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/services/services-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Services"
    link: /angular-interview-questions/services/
  - label: "How do HTTP interceptors work?"
prev:
  text: "What is the `OnPush` change-detection strategy?"
  link: "/angular-interview-questions/components/components-question-8"
next:
  text: "What is `@Self` and `@SkipSelf`?"
  link: "/angular-interview-questions/dependency-injection/dependency-injection-question-8"
---
# How do HTTP interceptors work?

## Answer

An interceptor wraps outgoing requests and incoming responses in a chain. Use it for cross-cutting concerns such as authentication headers, tracing, retries, and centralized error translation, while avoiding feature-specific business rules.

## Why this matters

The important idea behind **How do HTTP interceptors work** is not the terminology alone; it is the engineering decision the concept enables. Services separate reusable behaviour, data access, and shared state from components. Define a narrow API, inject dependencies rather than constructing them, and keep HTTP and error handling consistent. In a real system, the useful question is where the behaviour lives, what assumptions it relies on, and what becomes observable when those assumptions fail. Connecting the definition to those boundaries makes the answer useful for both an interview and day-to-day development.

A strong explanation should move in order from requirements to mechanism to verification. State the input and expected result, identify the component that owns the work, describe the important failure path, and finish with the test or measurement that proves the implementation behaves correctly. For a easy-level question, it is also worth naming one limitation. Doing so shows that you understand when the idea applies instead of treating it as a universal rule.

## How to reason about it

Start from the guarantee expressed in the direct answer: An interceptor wraps outgoing requests and incoming responses in a chain. Use it for cross-cutting concerns such as authentication headers, tracing, retries, and centralized error translation, while avoiding feature-specific business rules. Then separate that guarantee from implementation details. Ask what initiates the behaviour, which state or resource it reads, who owns cleanup or recovery, and whether the result is synchronous, asynchronous, persistent, or temporary. These questions expose the edge cases that interviewers usually explore next.

Next, define success in observable terms. A correct solution should produce the intended result for the normal path, remain understandable when input is empty or invalid, and fail without corrupting state. If concurrency, caching, networking, rendering, or persistence is involved, discuss stale data, repeated work, ordering, and partial failure explicitly. The exact concerns vary, but they should follow from **How do HTTP interceptors work**, not from a memorized checklist.

## Worked example

Consider a team adding a new capability to a multi-tenant SaaS dashboard without disrupting existing customers. In this Angular example, the team needs to make a decision specifically about **How do HTTP interceptors work**. They begin with the rule above—An interceptor wraps outgoing requests and incoming responses in a chain. Use it for cross-cutting concerns such as authentication headers, tracing, retries, and centralized error translation, while avoiding feature-specific business rules. Rather than applying it blindly, they write down the expected input, output, and failure behaviour. They then implement the smallest version that demonstrates the rule and exercise both the successful path and one realistic failure path.

During review, the team asks whether the example would still be correct with repeated requests, missing data, a slow dependency, or a larger workload. Only the cases relevant to this question are kept. Finally, they verify the result at the boundary a user or another system can observe. That may be a focused unit test, an integration test, a browser profile, a log or metric, or a rollback exercise. This turns the concept into evidence rather than an assertion.

## Common mistakes and trade-offs

A weak answer repeats a definition but never explains consequences. Another common mistake is choosing a tool or pattern before clarifying the requirement. Avoid claiming that one option is always faster, safer, or cleaner; describe the workload and constraints that make the claim true. Also distinguish correctness from optimization: first make the behaviour correct and testable, then use measurements to justify additional complexity.

In production, simpler implementations are generally easier to operate, but simplicity does not mean ignoring error handling, security, accessibility, cleanup, or observability. Add those controls at the boundary where the risk exists. If the solution introduces caching, retries, shared state, abstraction, or background work, explain the invalidation, ownership, or recovery rule as part of the design.

## Interview-ready summary

Lead with this sentence: An interceptor wraps outgoing requests and incoming responses in a chain. Use it for cross-cutting concerns such as authentication headers, tracing, retries, and centralized error translation, while avoiding feature-specific business rules. Follow it with the mechanism, one concrete decision from the worked example, and one limitation or trade-off. That structure gives the interviewer a direct answer first while leaving clear openings for deeper follow-up questions.

## Copyable example

```ts
// How do HTTP interceptors work? | angular-how-do-http-interceptors-work
@Injectable({ providedIn: "root" })
export class UserService {
  constructor(private http: HttpClient) {}
  get(id: string) { return this.http.get<User>(`/api/users/${id}`) }
}
```

A root provider creates one application-wide service instance by default.
