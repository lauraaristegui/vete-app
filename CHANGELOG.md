## [0.4.0] - 2026-09-21

### ✨ Added

#### BFF

- Added initial Node.js and Express BFF.
- Added layered backend architecture using Routes, Controllers, Services, and Repositories.
- Added mock data repository as the initial data source.
- Added JSON request body handling with Express.
- Added CORS configuration for communication between the React frontend and BFF.

#### Clients API

- Added `GET /clients`.
- Added `GET /clients/:id`.
- Added `POST /clients`.
- Added `PATCH /clients/:id`.
- Added `POST /clients/:clientId/pets`.
- Added `404` responses for non-existing clients.

#### Pets API

- Added `GET /pets/:petId`.
- Added `PATCH /pets/:petId`.
- Added global pet identifiers across clients.
- Added `404` responses for non-existing pets.

#### Frontend API integration

- Added frontend service layer for client and pet HTTP operations.
- Connected client loading to `GET /clients`.
- Connected client creation to `POST /clients`.
- Connected pet creation to `POST /clients/:clientId/pets`.
- Integrated BFF data with `ClientsProvider`.
- Added complete client and initial pet creation flow from `NewClientPage`.

### ♻️ Changed

#### Client state

- Replaced frontend client mock initialization with data loaded from the BFF.
- Kept `ClientsContext` as the shared application state for client-related views.
- Moved client and pet ID generation responsibility from the frontend to the BFF.
- Aligned the client data contract between the frontend and BFF.

#### Architecture

- Started migration from frontend-local mock data to BFF-managed application data.
- Introduced Repository abstraction to isolate data access from business and HTTP layers.
- Prepared the data layer for migration from in-memory mock data to persistent storage.

### 🛠️ Fixed

- Fixed client list rendering key warning.
- Fixed pet creation for existing clients.
- Fixed pet lookup using globally unique pet IDs.
- Fixed pet update flow using `PATCH /pets/:petId`.
- Fixed CORS errors between the frontend on port `3002` and BFF on port `3000`.

### ⚠️ Known limitations

- Client and pet data is currently stored in memory.
- Created or updated data is lost when the BFF process restarts.
- Persistent storage will be introduced in the next development stage.

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

