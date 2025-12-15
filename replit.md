# TASC Website

## Overview

This is the official website for TASC (Toronto Autonomous Systems Collective), a student-led robotics team at Toronto Metropolitan University. The site showcases the team's projects (rovers, battlebots), events, team members, and provides contact/sponsorship information. It's a multi-page informational website built with a React frontend and Express backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library (Radix UI primitives + Tailwind)
- **State Management**: TanStack React Query for server state
- **Build Tool**: Vite with hot module replacement

The frontend lives in `/client` with the main entry at `client/src/main.tsx`. Pages are in `/client/src/pages` (Home, Projects, Events, Team, Join). Shared layout components (Navigation, Footer) are in `/client/src/components/layout`.

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Server**: HTTP server with Vite middleware in development
- **API Pattern**: REST endpoints prefixed with `/api`
- **Storage Interface**: Abstract `IStorage` interface with in-memory implementation (`MemStorage`) for development

The backend is in `/server` with routes registered in `server/routes.ts` and storage abstraction in `server/storage.ts`.

### Database Schema
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts`
- **Current Tables**: `users` table with id, username, password fields
- **Validation**: Zod schemas generated from Drizzle schemas via `drizzle-zod`

The database is configured via `DATABASE_URL` environment variable. Migrations output to `/migrations`. Currently using in-memory storage but schema is ready for PostgreSQL.

### Shared Code
The `/shared` directory contains code used by both frontend and backend, primarily the database schema and types.

## External Dependencies

### Database
- **Neon Serverless PostgreSQL**: `@neondatabase/serverless` for database connections
- **Drizzle ORM**: Schema definition and query building
- **connect-pg-simple**: Session storage (available but sessions not currently implemented)

### Frontend Libraries
- **Radix UI**: Accessible component primitives (dialog, dropdown, tabs, etc.)
- **TanStack React Query**: Data fetching and caching
- **Embla Carousel**: Carousel functionality
- **react-day-picker**: Date picker component
- **date-fns**: Date utilities
- **lucide-react**: Icon library
- **class-variance-authority**: Component variant styling

### Build & Development
- **Vite**: Frontend bundling with React plugin
- **esbuild**: Backend bundling for production
- **Replit plugins**: Runtime error overlay, cartographer, dev banner