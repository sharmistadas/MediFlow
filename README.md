# MediFlow — Clinic Management Frontend (Phase 1)

Professional clinic management frontend built with React, Vite, Bootstrap 5, React Router, React Icons and custom CSS.

## Current phase

Phase 1 is complete:

- Vite + React project setup
- Required dependencies installed
- Folder structure created
- Demo role-based login (Admin, Doctor, Receptionist)
- Demo registration stored in browser localStorage
- Protected, role-aware routes
- Role-specific sidebar/navbar/layouts
- Logout
- 404 page
- Direct URL + browser refresh support
- Shared reusable components
- Dashboard routing screens with demo statistics

All module pages beyond login/register are currently routing-ready screens. They will be replaced with full working modules in the next phases.

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed by Vite (usually http://localhost:5173).

## Demo accounts

| Role | Email | Password |
| --- | --- | --- |
| Admin | admin@mediflow.demo | Admin@123 |
| Doctor | doctor@mediflow.demo | Doctor@123 |
| Receptionist | reception@mediflow.demo | Reception@123 |

Selecting a role on the login page fills its demo credentials automatically.

## Important

This is frontend-only demo authentication. It is not production security. Only fictional demo data is used. No backend, database, Firebase or Supabase is connected.

## Scripts

```bash
npm run dev     # start development server
npm run build   # create production build
npm run lint    # run lint checks
npm run preview # preview the production build
```
