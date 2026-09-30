---
name: Kinetic Obsidian
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#dec1af'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#a68b7c'
  outline-variant: '#574235'
  surface-tint: '#ffb786'
  primary: '#ffb786'
  on-primary: '#502400'
  primary-container: '#f57c00'
  on-primary-container: '#572800'
  inverse-primary: '#964900'
  secondary: '#ffb59a'
  on-secondary: '#5b1b00'
  secondary-container: '#f95e14'
  on-secondary-container: '#4f1700'
  tertiary: '#c8c6c5'
  on-tertiary: '#303030'
  tertiary-container: '#9f9d9d'
  on-tertiary-container: '#353535'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdcc6'
  primary-fixed-dim: '#ffb786'
  on-primary-fixed: '#311300'
  on-primary-fixed-variant: '#723600'
  secondary-fixed: '#ffdbcf'
  secondary-fixed-dim: '#ffb59a'
  on-secondary-fixed: '#380d00'
  on-secondary-fixed-variant: '#802a00'
  tertiary-fixed: '#e4e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '800'
    lineHeight: 34px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 24px
  kpi-number:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '800'
    lineHeight: 30px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 22px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-xs:
    fontFamily: Plus Jakarta Sans
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 0.75rem
  margin: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
---

## Brand & Style

The design system establishes a high-performance, dark-mode-first management environment tailored for rapid mobile e-commerce administration. Its core visual posture blends technical precision with visceral energy: a deep graphite and black foundation ignited by high-voltage deep orange accents. 

The aesthetic is Modern High-Contrast Minimalist with tactile utility. It communicates speed, executive control, and absolute clarity under rapid on-the-go decision making. The target user is an active merchant or store manager operating primarily on a handheld device; cognitive friction must be near zero. Every tap, swipe, and status check feels immediate, responsive, and definitive.

Primary tenets:
- **Zero Ambiguity:** High tonal contrast between interactive states and deep canvas layers ensures immediate legibility in varying lighting conditions.
- **Data-Dense Yet Breathable:** Mobile views prioritize numeric clarity and status visibility without visual crowding.
- **Intentional Chroma:** Vibrant hues are reserved strictly for high-impact brand accents, focal actions, and semantic status verification.

## Colors

The system is calibrated natively for dark surfaces to minimize glare during continuous mobile use while projecting a sharp, authoritative toolset.

### Palette Architecture
- **Primary Accent (`#F57C00`):** Electric dark orange. Primary call-to-action buttons, key KPI trends, active navigation states, and primary toggles.
- **Primary Deep (`#E65100`):** Pressed states, active borders, and focal touch targets requiring anchored saturation.
- **Canvas Base (`#121212`):** Ground level screen background; total absorption of visual noise.
- **Surface Elevation 1 (`#1E1E1E`):** Standard card backgrounds, list items, and header surfaces.
- **Surface Elevation 2 (`#2A2A2A`):** Interactive containers, input fills, dropdown panels, and modal bottom sheets.
- **Border Subtle (`#333333`):** High-precision divider lines and card borders.

### Content & Typography Contrast
- **High Contrast (`#FFFFFF`):** Metric values, primary headers, modal titles, and critical alerts.
- **Mid Contrast (`#E0E0E0`):** Secondary values, form field text, table headers, and active chip labels.
- **Low Contrast (`#9E9E9E`):** Micro-labels, metadata, timestamps, SKU hints, and inactive icons.

### Semantic Indicators
- **Positive / Approved (`#00E676` background tint `rgba(0, 230, 118, 0.12)`):** Immediate positive reinforcement for approved orders and payment clearance.
- **Warning / Pending (`#FFD600` background tint `rgba(255, 214, 0, 0.12)`):** Attention-grabbing state for pending approvals, low stock alerts, or temporary reservations.
- **Critical / Expired (`#FF5252` background tint `rgba(255, 82, 82, 0.12)`):** Expired coupons, failed charges, and out-of-stock indicators.

## Typography

The typography leverages `Plus Jakarta Sans` across all hierarchical levels to yield a crisp, architectural geometry engineered for mobile viewing. Numeric clarity is paramout; all currency, quantities, and performance figures inherit tabular figures where supported.

### Implementation Guidelines
- **KPI Number:** Exclusively reserved for metric highlights (daily gross sales, unit volume, open orders). Set in extra bold to establish instant vertical visual anchors.
- **Headlines:** Use tight letter-spacing (`-0.02em`) for headlines to maintain punchiness in condensed mobile horizontal footprints.
- **Labels & Badges:** `label-xs` utilizes uppercase tracking (`0.05em`) specifically for order status tags (`PAGO`, `PENDENTE`, `CANCELADO`) and promotional coupon codes.
- **Body Text:** Standard reading lines default to `#E0E0E0` for reduced eye strain, reserving `#FFFFFF` for titles, values, and dynamic inputs.

## Layout & Spacing

The mobile layout operates on a flexible 4-column grid within standard handheld viewport constraints (360px–430px base width). 

### Layout Architecture
- **Screen Margins:** Fixed at `1rem` (16px) on horizontal boundaries, creating an edge-safe perimeter that prevents thumb-reach clipping.
- **Grid Gutter:** `0.75rem` (12px) between two-column card configurations (e.g., side-by-side KPI metric cards).
- **Rhythm & Stacking:** Information rows within cards conform to `space-sm` (8px) or `space-xs` (4px). Section dividers and macro component groupings separate via `space-lg` (16px) or `space-xl` (24px).
- **Bottom Navigation / Action Anchors:** Fixed interactive bottom bars maintain safe-area padding plus an internal padding of `space-md` to avoid OS gesture conflict.

## Elevation & Depth

Visual hierarchy does not rely on soft drop shadows, which dilute contrast on dark OLED displays. Instead, the design system employs **structural tonal layering** combined with **subtle razor-sharp micro-borders**.

### Surface Hierarchy
1. **Level 0 (Canvas):** `#121212` — Default deep background for screen scaffolds.
2. **Level 1 (Card / List Tier):** `#1E1E1E` — Container for actionable groups, products, and order entries. Delimited with a hairline border: `1px solid rgba(255, 255, 255, 0.08)`.
3. **Level 2 (Active / Input Field Tier):** `#2A2A2A` — Form elements, search fields, segmented controls, and thumbnail placeholders.
4. **Level 3 (Overlay / Sheet Tier):** `#1E1E1E` elevated with a 40% blur underlay `backdrop-filter: blur(16px)` and an ambient top border `1px solid rgba(245, 124, 0, 0.3)` to signify dynamic state changes during coupon creation or product editing.

### Active & Focus States
When an interactive card or field is active, it does not gain a drop shadow. It receives an interior or perimeter stroke illumination in primary orange (`#F57C00`) at 1.5px width.

## Shapes

The geometric framework is calculated around a balanced **Rounded (`2`)** profile. This structure softens the rigid industrial dark palette while retaining sharp administrative utility.

- **Inputs, Buttons, and Cards:** Default to `0.5rem` (8px) corner radius. This yields precise alignment without looking circular.
- **Status Badges & Quick Action Chips:** Set to `rounded-lg` (1rem / 16px) or fully pill-shaped to stand out distinctively from structural card bounds.
- **Media / Image Upload Viewports:** Bound to `0.5rem` (8px) with internal dotted borders for empty state dropzones.

## Components

### Buttons
- **Primary:** Background `#F57C00`, text `#121212` (bold), radius `8px`, height `48px` (minimum accessible touch target). On press: scales to 0.98, background shifts to `#E65100`.
- **Secondary / Ghost:** Background `transparent`, border `1px solid #333333`, text `#FFFFFF`. Hover/press: background `#2A2A2A`.
- **Destructive / Expire Action:** Border `1px solid rgba(255, 82, 82, 0.3)`, text `#FF5252`, background `rgba(255, 82, 82, 0.05)`.

### KPI Metric Cards
- **Structure:** Surface `#1E1E1E`, border `1px solid rgba(255, 255, 255, 0.06)`, padding `12px`.
- **Content Flow:** Upper row displays the label (`label-md` in `#9E9E9E`) paired with an icon or trend tag. The core is dominated by `kpi-number` in `#FFFFFF`. The footer hosts a comparative delta chip (e.g., `+18%` in `#00E676`).

### Badges & Status Chips
- **Aprovado (Approved):** Background `rgba(0, 230, 118, 0.12)`, text `#00E676`, dot indicator `6px` solid `#00E676`.
- **Pendente (Pending):** Background `rgba(255, 214, 0, 0.12)`, text `#FFD600`, dot indicator `6px` solid `#FFD600`.
- **Esgotado / Expirado:** Background `rgba(255, 82, 82, 0.12)`, text `#FF5252`.
- Text is set in `label-xs` uppercase tracking.

### Product & Order Lists
- Flat card style with surface `#1E1E1E`.
- Separated by `space-sm` (8px) gaps instead of full dividers to maintain touch target separation.
- Swipe gestures reveal quick actions (e.g., Mark as Approved, Edit Stock).
- Includes concise typography stacks: primary title (`body-lg`, `#FFFFFF`), secondary metadata (`body-sm`, `#9E9E9E`), and trailing financial indicator (`label-lg`, `#F57C00`).

### Form Inputs & Category Selectors
- **Input Containers:** Height `48px`, background `#2A2A2A`, text `#FFFFFF`, placeholder `#9E9E9E`, radius `8px`. Active focus shifts border to `1.5px solid #F57C00`.
- **Category Pills:** Horizontal scrolling ribbon of segmented chips. Inactive chips use `#1E1E1E` with `#9E9E9E` text; active selection converts to solid `#F57C00` with dark text `#121212`.

### Image Upload Zone
- Dimensions: Square ratio (e.g., `88x88px` for thumbnail lists, full-width `140px` height for hero banners).
- State: Dashed border `1.5px dashed #333333`, background `#1A1A1A`. 
- Filled state displays photo with a discrete orange badge indicating the primary photo, with a close (`X`) icon button in the corner.

### Promotion & Coupon Configurator
- Specialized segmented block containing:
  1. Uppercase coupon string input field with auto-capitalization and monospace aesthetic.
  2. Native-optimized split pickers for Date and Time expiration, styled with calendar and clock icon prefixes.
  3. Interactive toggle switches: Track `#2A2A2A`, active fill `#F57C00`, thumb `#FFFFFF`.