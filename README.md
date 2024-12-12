# Payload-Astro

## Overview

This repository is not a boilerplate. Instead, it serves as a Proof of Concept (PoC) to demonstrate how combining [SST](https://sst.dev/) and [Payload CMS](https://payloadcms.com/) can help reduce costs and create more resilient CMS-based websites. It showcases strategies that can eliminate unnecessary expenses, simplify infrastructure, and improve developer experience.

> [!WARNING]  
> This PoC is still under active development. The codebase needs cleanup, Route53 integration is pending, and certain adjustments (e.g., RichText rendering, CloudFront settings) are required. Please do not expect everything to run seamlessly if you attempt to deploy it as-is. Over the next few days and weeks, I will refine and improve this repository.

---

## Motivation

### Reducing Costs

Many CMS-based projects become unnecessarily expensive:

1. **High CaaS Costs:**  
   Traditional Content as a Service (CaaS) platforms often impose expensive plans that limit the number of users, collections, and features. These constraints can push costs into the thousands of dollars.

2. **Infrastructure Overhead:**  
   In some cases, simple projects (a frontend, a few APIs, and a storage bucket) still require months of work by an infrastructure engineer, significantly inflating the budget. For example, in a previous project, I identified that several thousands of dollars could have been saved by optimizing the setup.

These costs don’t just waste money; they also limit meaningful investments in the project itself. In one instance, infrastructure and CMS expenses forced the team to opt for static site generation to avoid server-side rendering costs, resulting in poor SEO performance due to skipped features like image optimization.

**Our Approach:**  
- **Payload CMS**: A code-first, self-hosted CMS that removes the vendor lock-in and feature restrictions common in CaaS platforms. You pay only for the cloud resources you use, and you maintain full control over customization.
- **SST**: With SST, a frontend engineer experienced in AWS can spin up complete environments within minutes. This makes it easier to create preview environments, monitor issues, and avoid months-long infrastructure engagements.

By using Payload CMS and SST together, we can greatly reduce costs while maintaining flexibility and control.

---

### Improving Developer Experience (DX)

Working with CMS solutions and multiple resources can often be error-prone and frustrating:

- **Breaking Changes:** A CMS content update can break the frontend if the schema changes unexpectedly.
- **Complex Integrations:** Separate frontend, backend, and infrastructure concerns often lead to fragile integrations that break when APIs or endpoints change.

**Our Approach:**

- **Code-First CMS with Type-Safety:**  
  Payload CMS uses code-defined collections and fields. Any schema changes require corresponding code updates, ensuring the frontend and CMS remain in sync. This approach reduces runtime errors and makes the integration between CMS content and frontend code more predictable.
  
- **SST for Infrastructure Linking:**  
  SST simplifies the process of connecting infrastructure resources (e.g., linking an S3 bucket to your frontend code). By automating these connections, we reduce the need for manual configuration and minimize the risk of misconfigurations or errors due to missed hardcoding.

Together, Payload CMS and SST provide a more reliable workflow, improved DX, and a smoother development process.

---

## Prerequisites

1. **AWS Account Setup:**  
   SST stores application state on AWS even during development, so you’ll need an [AWS account](https://sst.dev/docs/aws-accounts).

2. **Container Manager:**  
   The development environment uses a PostgreSQL database running in a Docker container. Ensure you have a container manager (e.g., Rancher Desktop) installed and running.

3. **Configuration Updates:**  
   - Update the `sso-session` value in the root `package.json` to match your AWS setup from Step 1.  
   - Update the `profile` value in `sst.config.ts` to use the AWS account name configured in Step 1.

---

## Getting Started

Start the development environment with:

```bash
bun run dev
```