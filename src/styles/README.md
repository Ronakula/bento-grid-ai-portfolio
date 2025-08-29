# Styles Organization

This folder contains all the CSS styles for the React components, organized by component and functionality.

## Structure

### Main Files
- `index.css` - Main entry point that imports all component styles
- `global.css` - Global styles, CSS variables, reset, typography, and utility classes
- `layout.css` - Layout components (container, navigation, bento grid)

### Component-Specific Styles
- `cards.css` - Common card component styles (headers, icons)
- `tech-stack.css` - Tech stack section with marquee animations
- `stats.css` - Stats and KPI components
- `testimonials.css` - Testimonial cards and layout
- `workflow.css` - Workflow steps and process display
- `projects.css` - Project thumbnails and carousel
- `profile-card.css` - Profile card with avatar, tags, and actions
- `services.css` - Services grid layout
- `clients.css` - Client logos grid
- `social-links.css` - Social media links
- `work-together.css` - Work together card and actions

## Usage

The main `src/index.css` file imports all styles through the `src/styles/index.css` file. This ensures that:

1. All styles are properly organized by component
2. Each component has its own dedicated CSS file
3. Styles are modular and maintainable
4. The application maintains the same visual appearance

## Benefits

- **Modularity**: Each component's styles are isolated
- **Maintainability**: Easy to find and modify specific component styles
- **Scalability**: New components can have their own CSS files
- **Organization**: Clear separation of concerns
- **Performance**: CSS imports are handled efficiently by the build system

## Adding New Component Styles

1. Create a new CSS file in this folder (e.g., `new-component.css`)
2. Add the import to `src/styles/index.css`
3. Write component-specific styles in the new file
4. Use CSS variables from `global.css` for consistency

## CSS Variables

All design tokens are defined in `global.css` under the `:root` selector, including:
- Color palette (primary, accent, surfaces, text)
- Typography scales
- Spacing and sizing
- Shadows and effects
- Bento grid defaults
