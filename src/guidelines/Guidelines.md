# Typography System

## Web Fonts
This project uses two premium web fonts from Bunny Fonts:

1. **Inter** (weights 300-700): Sans-serif base font for body text and UI elements
2. **Fraunces** (weights 500-700): Display serif font for headings (h1-h6)

The fonts are imported via CDN and defined as CSS variables:
- `--font-base`: Inter - applied to body and all UI elements
- `--font-display`: Fraunces - applied to all heading elements

## Motion UI System

This project uses Motion (formerly Framer Motion) for smooth, professional animations throughout the entire application.

### Animation Patterns

**Entrance & Exit Animations:**
- `whileInView` with `viewport={{ margin: "-150px" }}` for bidirectional scroll-triggered animations (enter AND exit)
- Staggered delays for sequential element animations
- Custom easing curves: `[0.22, 1, 0.36, 1]` (expo out) and `[0.25, 0.46, 0.45, 0.94]` (ease out quad)
- Viewport margins trigger animations before fully visible for smoother user experience
- Varied section transitions for visual interest:
  - **FeaturesSection**: Slide from right with blur (`x: 100, filter: 'blur(10px)'`)
  - **AboutSection**: Vertical slide with scale and 3D rotation (`y: 80, scale: 0.95, rotateX: -15`)
  - **ResumeSection**: Slide from left with blur (`x: -100, filter: 'blur(10px)'`)
  - **ContactSection**: Scale and zoom entrance (`scale: 0.9, y: 40` with 3D rotations on items)
- Exit animations animate in reverse when scrolling back up

**Hover Interactions:**
- `whileHover={{ scale: 1.05 }}` for buttons and cards
- `whileHover={{ y: -10 }}` for card elevation effects
- Icon rotation and translation on hover

**Micro-interactions:**
- `whileTap={{ scale: 0.95 }}` for tactile feedback
- Smooth transitions between theme modes
- Animated progress bars and loading states

**Continuous Animations:**
- Floating orbs with infinite scale/position changes
- Rotating decorative elements
- Pulsing glow effects on interactive elements

### Key Components with Motion

- **App**: Page load animation with bouncing dots, scroll-to-top FAB with animations, perspective wrapper on main content
- **ScrollProgress**: Fixed sidebar with animated dots showing current section, smooth scroll navigation
- **ParticleField**: Canvas-based particle system with connection lines and parallax scrolling effect (0.15x speed)
- **CursorGlow**: Smooth cursor-following glow effect (desktop only)
- **Navigation**: Slide-in on mount, hover effects on links
- **HeroSection**: Complex layered animations with floating decorative elements, on-mount entrance (not scroll-triggered)
- **FeaturesSection**: Slide from right transition with blur, enhanced project cards with screenshots, View Site and View Code buttons
- **AboutSection**: Vertical slide with scale transition, 3D card rotations on scroll
- **ResumeSection**: Slide from left transition with blur, animated tab buttons, skill bar fill animations
- **ContactSection**: Scale and zoom entrance, 3D contact card animations
- **Footer**: Social link pop-in animations
- **ThemeToggle**: Icon rotation and scale transitions between themes

### Advanced Motion Features

- **AnimatePresence**: Used for component unmounting animations and transitions
- **Drag gestures**: Implemented in carousel for swipe-to-navigate
- **Spring physics**: Cursor glow uses spring animations for smooth following
- **Infinite animations**: Background orbs and decorative elements
- **Sequential animations**: Staggered entrance with calculated delays
- **3D Transforms**: Perspective wrapper on main content enables subtle 3D effects (rotateX, rotateY)
- **Motion Blur**: Filter blur effects on section entrances create depth and speed perception
- **Smart Viewports**: Negative margins trigger animations earlier for smoother user experience
- **Parallax Scrolling**: ParticleField moves at 0.15x scroll speed creating depth
- **Bidirectional Animations**: Removing `once: true` allows animations to play both on enter and exit
- **Section Progress Indicators**: Visual dots showing current scroll position with hover tooltips

**Add your own guidelines here**
<!--

System Guidelines

Use this file to provide the AI with rules and guidelines you want it to follow.
This template outlines a few examples of things you can add. You can add your own sections and format it to suit your needs

TIP: More context isn't always better. It can confuse the LLM. Try and add the most important rules you need

# General guidelines

Any general rules you want the AI to follow.
For example:

* Only use absolute positioning when necessary. Opt for responsive and well structured layouts that use flexbox and grid by default
* Refactor code as you go to keep code clean
* Keep file sizes small and put helper functions and components in their own files.

--------------

# Design system guidelines
Rules for how the AI should make generations look like your company's design system

Additionally, if you select a design system to use in the prompt box, you can reference
your design system's components, tokens, variables and components.
For example:

* Use a base font-size of 14px
* Date formats should always be in the format “Jun 10”
* The bottom toolbar should only ever have a maximum of 4 items
* Never use the floating action button with the bottom toolbar
* Chips should always come in sets of 3 or more
* Don't use a dropdown if there are 2 or fewer options

You can also create sub sections and add more specific details
For example:


## Button
The Button component is a fundamental interactive element in our design system, designed to trigger actions or navigate
users through the application. It provides visual feedback and clear affordances to enhance user experience.

### Usage
Buttons should be used for important actions that users need to take, such as form submissions, confirming choices,
or initiating processes. They communicate interactivity and should have clear, action-oriented labels.

### Variants
* Primary Button
  * Purpose : Used for the main action in a section or page
  * Visual Style : Bold, filled with the primary brand color
  * Usage : One primary button per section to guide users toward the most important action
* Secondary Button
  * Purpose : Used for alternative or supporting actions
  * Visual Style : Outlined with the primary color, transparent background
  * Usage : Can appear alongside a primary button for less important actions
* Tertiary Button
  * Purpose : Used for the least important actions
  * Visual Style : Text-only with no border, using primary color
  * Usage : For actions that should be available but not emphasized
-->
