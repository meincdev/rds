# Contributing to Reba Design System (RDS)

Thank you for your interest in contributing to RDS! This document provides guidelines and instructions for contributing.

## Getting Started

### Prerequisites

- Node.js 18+
- npm (comes with Node.js)

### Clone and Install

```bash
# Clone the repository
git clone https://github.com/meincdev/rds.git
cd rds

# Install dependencies
npm install

# Build all packages
npm run build
```

### Project Structure

```
rds/
├── packages/
│   ├── rds-tokens/        # Design tokens
│   ├── rds-ui-core/       # Core UI components
│   ├── rds-media-core/    # Media player components
│   ├── rds-ai-elements/   # AI chat components
│   └── rds-social-core/   # Social interaction components
├── package.json           # Root workspace config
└── tsconfig.json          # Root TypeScript config
```

## Development Workflow

### Building Packages

```bash
# Build all packages (in dependency order)
npm run build

# Build a specific package
npm run build -w @meinc/rds-ui-core
```

### Running Tests

```bash
# Run all tests
npm run test

# Run tests for a specific package
npm run test -w @meinc/rds-ui-core
```

### Linting

```bash
# Lint all packages
npm run lint

# Lint a specific package
npm run lint -w @meinc/rds-ui-core
```

### Type Checking

```bash
npm run typecheck
```

## Coding Standards

### TypeScript

- Use TypeScript for all code
- Enable strict mode
- Export types alongside components
- Use explicit return types for functions

### React

- Use functional components with hooks
- Use `forwardRef` for components that need ref forwarding
- Keep components focused and composable
- Follow the compound component pattern where appropriate

### Styling

- Use Tailwind CSS for styling
- Use `class-variance-authority` (cva) for component variants
- Use the `cn()` utility for merging class names
- Follow the design token system from `@meinc/rds-tokens`

### File Naming

- Use kebab-case for file names: `my-component.tsx`
- Use PascalCase for component names: `MyComponent`
- Prefix RDS-specific wrappers with `Rds`: `RdsButton`

## Making Changes

### Branch Naming

- `feat/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation changes
- `refactor/description` - Code refactoring

### Commit Messages

Follow conventional commits:

```
feat(ui-core): add new Button variant
fix(media-core): resolve audio player seek issue
docs(readme): update installation instructions
```

### Pull Requests

1. Create a feature branch from `main`
2. Make your changes
3. Ensure all tests pass
4. Update documentation if needed
5. Submit a PR with a clear description

### PR Checklist

- [ ] Code follows the project's coding standards
- [ ] Tests added/updated for new functionality
- [ ] Documentation updated if needed
- [ ] All CI checks pass
- [ ] PR description clearly explains the changes

## Adding New Components

1. Determine the appropriate package for the component
2. Create the component file in `src/components/` or appropriate directory
3. Export from the package's `src/index.ts`
4. Add TypeScript types and JSDoc comments
5. Write tests if applicable
6. Update the package README

## Reporting Issues

When reporting issues, please include:

- A clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Environment details (OS, Node version, etc.)
- Code samples or screenshots if helpful

## Questions?

Feel free to open a GitHub issue for questions or discussions.

---

Thank you for contributing to RDS!
