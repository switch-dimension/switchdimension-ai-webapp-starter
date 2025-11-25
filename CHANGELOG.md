# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2025-11-25

### Changed
- Updated README with enhanced tech stack documentation and improved setup instructions
- Improved clarity in installation and Clerk setup sections

### Fixed
- Updated middleware proxy configuration for Next.js 16 compatibility

### Dependencies
- Upgraded Prisma packages and added configuration
- Updated TypeScript and ESLint plugin-kit versions
- Updated ESLint configuration and dependencies
- Upgraded Next.js and ESLint packages
- Updated TypeScript configuration

## [0.2.1] - 2025-06-03

### Added
- Prisma ORM integration with PostgreSQL adapter
- Post model schema and migrations
- PostManager component for post management
- API routes for posts CRUD operations

## [0.2.0] - 2025-06-03

### Added
- Clerk authentication integration
- Dashboard functionality
- Settings page with user account management and preferences
- Sidebar navigation component
- Theme provider and toggle components for dark mode
- Docker setup for local Supabase development
- Docker Compose configuration
- Development scripts for spinning up and down services

### Changed
- Reversed routing protection - routes are protected by default, explicitly mark public routes
- Removed landing page for separation of concerns
- Updated middleware for safer default protection

### Documentation
- Enhanced README with prerequisites and setup instructions
- Added roadmap section
- Updated documentation for new sidebar component
- Added instructions for Supabase CLI installation

## [0.1.0] - 2025-06-03

### Added
- Initial release
- Next.js 16 with React 19
- Shadcn UI components
- Tailwind CSS v4 with PostCSS
- TypeScript 5.9 configuration
- ESLint 9 configuration
- Basic project structure

[1.1.0]: https://github.com/switch-dimension/switchdimension-webapp-starter/releases/tag/v1.1.0
[0.2.1]: https://github.com/switch-dimension/switchdimension-webapp-starter/releases/tag/v0.2.1
[0.2.0]: https://github.com/switch-dimension/switchdimension-webapp-starter/releases/tag/v0.2.0
[0.1.0]: https://github.com/switch-dimension/switchdimension-webapp-starter/releases/tag/v0.1.0
