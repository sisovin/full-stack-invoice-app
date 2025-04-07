# Full Stack Invoice App

## Description

This repository contains a full stack invoice application with a backend built using NestJS and a frontend built using Lynx.js/React. The application includes features such as authentication, user management, role-based access control, invoice management, organization management, payment integration, and more.

## Backend Structure

```
/backend/
  ├── apps/
  │   ├── api-gateway/            # (NestJS App)
  │   │   ├── src/
  │   │   │   ├── main.ts
  │   │   │   ├── app.module.ts
  │   │   │   ├── config/         # Environment configuration
  │   │   │   ├── guards/         # Global guards (AuthGuard, RolesGuard)
  │   │   │   ├── interceptors/   # Logging, Timeout, etc.
  │   │   │   ├── middlewares/    # Logger, Response-time middleware
  │   │   │   ├── exceptions/     # Global Exception Filters
  │   │   │   ├── services/       # Common services (Redis, Logger, etc.)
  │   │   │   ├── modules/
  │   │   │   │   ├── auth/           # Authentication (JWT, Clerk, MFA, Passkeys)
  │   │   │   │   ├── users/          # User CRUD, Hash Passwords (Argon2)
  │   │   │   │   ├── roles/          # Roles/Permissions Management
  │   │   │   │   ├── audit/          # Audit Logs (Role/Permission Changes)
  │   │   │   │   ├── invoices/       # Invoices CRUD + Soft Delete
  │   │   │   │   ├── organizations/  # Organization Management (Multi-Tenant)
  │   │   │   │   ├── payments/       # Stripe Payments Integration
  │   │   │   │   ├── customers/      # Customer Management
  │   │   │   │   └── cache/          # Redis Cache Client
  │   │   │   ├── database/
  │   │   │   │   ├── drizzle/        # Drizzle ORM configs
  │   │   │   │   └── migrations/     # DB Migrations (Drizzle Kit)
  │   │   │   ├── shared/             # DTOs, Types, Utils
  │   │   └── test/                   # Unit & E2E tests
  │   ├── libs/
  │   │   ├── common/                 # Shared libraries (Logger, Guards, Decorators)
  │   │   ├── config/                 # Global Configurations
  │   │   └── interfaces/             # Global types/interfaces
  │   └── package.json
```

## Frontend Structure

```
/frontend/
  ├── src/
  │   ├── app/                        # Lynx.js/React App
  │   │   ├── layout.tsx              # Root Layout
  │   │   ├── page.tsx                # Dashboard Home
  │   ├── features/                   # Feature-based Structure
  │   │   ├── auth/                   # Clerk Auth (Login, MFA, Passkeys)
  │   │   ├── invoices/               # Invoice Create, List, Update UI
  │   │   ├── organizations/          # Org Management UI
  │   │   ├── payments/               # Stripe Payment Status UI
  │   │   ├── users/                  # User Settings
  │   │   ├── roles/                  # Roles and Permission Settings
  │   ├── components/                 # Reusable UI components
  │   │   ├── Button.tsx
  │   │   ├── Modal.tsx
  │   │   └── Table.tsx
  │   ├── hooks/                      # Custom React hooks (useAuth, useInvoice, etc.)
  │   ├── libs/                       # API Clients (axios config, etc.)
  │   ├── utils/                      # Utilities (formatters, validators)
  │   ├── styles/                     # Tailwind CSS, shadcn/ui
  │   └── config/                     # Environment variables for Frontend
  ├── public/
  ├── tailwind.config.ts
  ├── postcss.config.js
  └── vite.config.ts                  # or next.config.js if using Next.js
```

## 🚀 Tech Highlights

| Area            | Stack                                                         |
|-----------------|---------------------------------------------------------------|
| **Backend**     | NestJS, Drizzle ORM, Redis, Clerk (Auth), Stripe, Resend (email)|
| **Frontend**    | Lynx.js/React, TailwindCSS, shadcn/ui, Clerk (Auth), Stripe    |
| **Database**    | Xata (Serverless SQL)                                          |
| **Caching**     | Redis (cache sessions/invoices)                               |
| **Authentication** | JWT + Clerk Social Login + MFA + Passwordless (Passkeys)    |
| **Authorization** | Role-Permission system (Audit, Cleanup Redundant Permissions)|
| **Payments**    | Stripe Checkout Sessions                                       |
| **Emails**      | Resend (Transactional Emails)                                 |

---

## 📌 Next Steps

- Would you also like me to **draft a recommended GitHub folder naming convention**, like `feat/auth`, `feat/invoices`, `chore/setup`, etc.?
- Or **prepare a sample README** template that fits this Invoice App project (with instructions, local dev setup, env variables, etc.)?
