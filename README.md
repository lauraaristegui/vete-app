# 🐾 VeteApp

> 🚀 Proyecto personal de diseño y desarrollo de una plataforma de gestión veterinaria.

VeteApp es una aplicación de gestión veterinaria diseñada y desarrollada
desde cero como proyecto personal.

El proyecto abarca el proceso completo de creación de producto:

**UX Research → UX Design → UI Design → Desarrollo → Testing → Deploy**

La etapa de **UX/UI y prototipado del MVP se encuentra finalizada** y el
proyecto comienza actualmente su etapa de desarrollo.

---

## 🎯 Objetivo

VeteApp busca centralizar la gestión diaria de una veterinaria,
facilitando el trabajo del personal de recepción y de los profesionales
veterinarios.

El MVP contempla:

- Gestión de clientes y mascotas.
- Búsqueda de pacientes.
- Gestión de turnos y agenda.
- Acceso a información del paciente.
- Registro de consultas veterinarias.
- Historia clínica longitudinal.
- Registro de tratamientos y medicamentos.

La gestión de inventario y stock queda contemplada para futuras versiones.

---

## 👥 Usuarios

Durante la etapa de UX se definieron tres perfiles principales:

**Mariana — Recepcionista**  
Gestiona clientes, mascotas y turnos.

**Agostina — Veterinaria**  
Consulta información del paciente y registra consultas e historias clínicas.

**Carlos — Dueño de mascota**  
Representa las necesidades del cliente que lleva sus mascotas a la veterinaria.

---

## 🔎 Proceso UX

El producto fue diseñado partiendo del problema y las necesidades de los
usuarios antes de comenzar con el diseño de interfaces.

El proceso incluyó:

**Visión del producto → Definición del problema → Necesidades de usuario → User Personas → Business Flow → User Journeys → User Flows → Wireframes**

La documentación completa de esta etapa, junto con los diagramas y
wireframes, se encuentra en:

📁 `docs/ux`

---

## 🎨 UI Design

Una vez definidos y validados los principales flujos del producto,
se desarrolló la interfaz visual de VeteApp en Figma.

La etapa incluyó:

- Wireframes.
- Definición de identidad visual.
- Paleta de colores y variables.
- Tipografía.
- Espaciado y border radius.
- Estados semánticos.
- Design System.
- Componentes reutilizables.
- High-Fidelity Screens.
- Prototipo interactivo.

### 🧩 Design System

Se construyó un Design System reutilizable con componentes y variantes
para mantener consistencia visual en toda la aplicación.

La documentación visual se encuentra en:

📁 `docs/ui/design-system`

### 🖥️ High-Fidelity Screens

Se diseñaron los principales módulos del MVP:

- Recepción.
- Agenda.
- Clientes y mascotas.
- Historia clínica.
- Registro de consultas.
- Registro de medicamentos.
- Detalle de consultas.

Las pantallas se encuentran en:

📁 `docs/ui/high-fidelity-screens`

---

## 🔗 Prototipo interactivo

Se desarrolló un prototipo navegable en Figma para validar los principales
flujos antes de comenzar la implementación.

Uno de los recorridos principales permite realizar:

**Buscar paciente → Historia clínica → Iniciar consulta → Agregar medicamento → Finalizar consulta → Ver detalle**

👉 [Ver prototipo interactivo en Figma](TU_LINK_DE_FIGMA)

---

## 🏗️ Arquitectura del producto

El MVP se organiza en cuatro áreas principales:

**Recepción → Agenda → Clientes/Mascotas → Historia Clínica**

Una de las relaciones centrales del dominio es:

**Cliente → Mascota → Historia Clínica → Consultas**

Cada mascota mantiene su información clínica y el historial de las
consultas realizadas a lo largo del tiempo.

---

## 📌 Estado del proyecto

- [x] UX Research
- [x] UX Design
- [x] User Flows
- [x] Wireframes
- [x] Design System
- [x] High-Fidelity Screens
- [x] Prototipo interactivo
- [ ] Arquitectura Frontend
- [ ] Desarrollo Frontend
- [ ] Backend
- [ ] Testing
- [ ] Product Analytics
- [ ] CI/CD
- [ ] Deploy

---

## 🚀 Etapa actual

Con el **MVP de UX/UI finalizado**, VeteApp comienza su etapa de desarrollo.

El próximo objetivo es definir la arquitectura Frontend e implementar
progresivamente los módulos diseñados durante la etapa UX/UI.

---

## 🛠️ Tecnologías

### Diseño

- Figma
- UX Research
- UX Design
- UI Design
- Design Systems
- Prototipado

### Desarrollo

Las tecnologías y decisiones de arquitectura serán documentadas a medida
que avance la implementación.

---

## 📂 Documentación

La documentación del proyecto se encuentra organizada dentro de `docs`:

```text
docs/
├── ux/
│   ├── flows/
│   └── wiframes/
│
└── ui/
    ├── design-system/
    └── high-fidelity-screens/
```

Esto permite mantener el README enfocado en la presentación general del
producto y consultar los artefactos visuales únicamente cuando sea necesario.

---

## 👩‍💻 Autora

**María Laura Aristegui**  
Frontend Software Engineer

Proyecto personal desarrollado como parte de mi portfolio profesional.