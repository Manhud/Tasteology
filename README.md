# Frontend Technical Test

This project is an implementation of a frontend technical test that demonstrates the creation of interactive and responsive components following modern web development best practices.

## 🛠 Technologies Used

### Next.js 14

- **Why?**
  - Provides server-side rendering (SSR) for better SEO
  - File-system based routing
  - Automatic image optimization
  - Excellent TypeScript support
  - Hot reloading for rapid development

### TypeScript

- **Why?**
  - Provides static typing to prevent errors during development
  - Better code documentation through interfaces and types
  - Enhanced development experience with autocompletion
  - Facilitates long-term code maintenance
  - Improves team collaboration with clear type definitions

### Tailwind CSS

- **Why?**
  - Utility-first approach that speeds up development
  - Excellent responsive design support
  - No need to switch between files for styling
  - Automatic production optimization
  - Easy customization and maintenance
  - Built-in responsive design utilities

### React Portal (for Modal)

- **Why?**
  - Better z-index and overlay management
  - Avoids context issues with overflow and positioning
  - Improved accessibility for modal elements
  - Clean DOM hierarchy

## 📱 Implemented Features

1. **Responsive Design**

   - Mobile, tablet, and desktop breakpoints
   - Optimized images for different screen sizes
   - Fluid layout using CSS Grid and Flexbox
   - Mobile-first approach

2. **Interactivity**

   - Smooth hover and click animations
   - Modal for image visualization
   - Fluid state transitions
   - Click tracking for analytics

3. **Accessibility**

   - Semantic HTML structure
   - Image alt attributes
   - Proper modal focus management
   - ARIA attributes where needed

4. **Performance**
   - Automatic image optimization with Next.js
   - Automatic code splitting
   - Image lazy loading
   - Optimized bundle size

## 🚀 Architecture Decisions

### Component Structure

```
src/
├── components/
│   ├── ui/          # Reusable UI components
│   ├── hero-block/  # Main hero component
│   └── card-block/  # Cards component
├── lib/
│   └── utils.ts     # Shared utilities
└── types/
    └── index.ts     # Type definitions
```

### Design Patterns

- **Client Components**: Used specifically for interactivity (Modal, clicks)
- **Server Components**: For static rendering when possible
- **Compound Components**: For better organization and reuse

## 🔧 Potential Improvements

1. **Testing**

   - Implement unit tests with Jest
   - Integration tests with Testing Library
   - E2E testing with Cypress

2. **Performance**

   - Implement component lazy loading
   - Further image optimization
   - Add service workers for offline support

3. **Accessibility**
   - Add more ARIA roles
   - Improve keyboard handling
   - Implement high contrast themes

## 📦 How to Run the Project

```bash
# Install dependencies
npm install

# Run in development
npm run dev

# Build for production
npm run build

# Run in production
npm start
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Additional Notes

- Project follows Next.js 14 best practices
- Implemented a scalable design system
- Prioritized user experience and accessibility
- Mobile-first responsive design approach
- Modular and maintainable code structure

## 📝 Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages. This leads to more readable messages that are easy to follow when looking through the project history.

### Commit Message Format

Each commit message consists of a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
```

#### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or modifying tests
- `chore`: Maintenance tasks
- `ci`: CI/CD changes

#### Examples:

```bash
feat(hero): add animation to hero section
fix(modal): resolve modal closing issue
docs(readme): update installation instructions
style(components): format with prettier
refactor(utils): simplify click handler
test(modal): add unit tests for modal component
```

### Tools Used

- **Commitlint**: Checks if your commit messages meet the conventional commit format
- **Husky**: Git hooks to enforce commit message format
