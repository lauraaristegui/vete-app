## [Unreleased]

### 🚀 In Progress

- Veterinary consultation flow.
- Clinical consultation creation.
- Clinical history persistence.
- Agenda visual refinement.

---

## [0.3.2] - 2026-09-20

### ✨ Added

#### Client management

- Added client search by responsible name, DNI, or pet name.
- Added client detail view.
- Added client editing flow.
- Added pet creation flow for existing clients.
- Added shared client state using React Context.

#### Clinical history

- Added clinical history search by patient, responsible person, or DNI.
- Added patient clinical history detail view.
- Added navigation from pet cards to clinical history.
- Added reusable patient search result presentation.

#### Appointments

- Added appointment creation flow.
- Added appointment creation from an existing patient.
- Added date and time selection flow.
- Added appointment summary before confirmation.
- Integrated newly created appointments with the shared appointments state.

### ♻️ Changed

#### UI / Design System

- Refined the application visual language with warmer surfaces and softer borders.
- Added shared application background and surface color tokens.
- Improved `PetCard` and introduced variants for different contexts.
- Unified pet card presentation across Reception, Clients, Client Detail, and Clinical History.
- Added contextual action menus to pet cards.
- Moved client actions such as editing and adding pets into a contextual action menu.
- Improved pet avatars using species-specific images.
- Improved responsive pet card layouts.
- Standardized page content widths and spacing.
- Improved client search result presentation.

#### Reception

- Refined the client and pet search result layout.
- Simplified visible actions using contextual menus.
- Improved appointment table presentation.
- Added patient species avatars to appointment rows.

### 🛠️ Fixed

- Fixed appointments state initialization to prevent undefined list errors.
- Fixed client updates so edited information is reflected across the application.
- Fixed pet creation so newly added pets are available across client-related views.
- Fixed clinical history routing between search and patient detail views.
- Fixed inconsistent pet card sizing and layout across screens.

---

## [0.3.1] - 2026-09-16

### ✨ Added

#### Application features

- Agenda and Reception integration.
- Appointment status lifecycle.
- Shared appointment state using React Context.

---

## [0.3.0] - 2026-09-16

### ⚛️ Frontend — Foundation & Design System

Completed the first stage of the VeteApp frontend implementation,
establishing the application's base architecture and translating the
Figma Design System into reusable React components.

### 🏗️ Frontend Architecture

