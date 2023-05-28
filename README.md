[![Project banner](https://cdn.upload.systems/uploads/RHpuQQPG.webp)](https://chocolatte.falcxxdev.cyou)
![Vercel state](https://img.shields.io/github/deployments/gifaldyazkaa/chocolattech/Production?label=Vercel&logo=vercel&logoColor=%23000&style=for-the-badge) ![CI Status](https://img.shields.io/github/actions/workflow/status/gifaldyazkaa/chocolattech/lint.yml?label=CI&logo=github-actions&style=for-the-badge) ![Wakatime stats](https://wakatime.com/badge/user/aac434b8-a027-4f92-ac90-e5b2ae48b541/project/73821d0e-fb85-4c7b-9e23-737ab53076e6.svg?style=for-the-badge)

# Social Media App for Universities (Version 1.0)

Welcome to the README file for the presentation website of our social media app designed exclusively for universities. This document provides an overview of the app, its features, and the current state of development.

## Introduction

Our social media app aims to connect students, faculty, and staff within universities, fostering a vibrant and engaged community. It provides a platform for sharing information, collaborating on projects, and staying connected with university events and updates.

## Features

- User Registration and Authentication: The app allows users to create accounts and securely log in using their university credentials or email.
- Profile Creation and Customization: Users can create and personalize their profiles by adding information such as profile pictures, academic interests, and social links.
- News Feed: The app offers a dynamic news feed where users can view posts, photos, and videos shared by their peers and university administration.
- Groups and Communities: Users can join or create interest-based groups and communities, facilitating collaboration and knowledge-sharing among students and faculty.
- Events and Announcements: The app keeps users informed about upcoming university events, workshops, seminars, and other important announcements.
- Messaging and Direct Communication: Users can send private messages and engage in one-on-one or group conversations within the app.
- Notifications: The app provides real-time notifications to keep users updated about new posts, messages, event reminders, and other relevant activities.

## Current State (Version 1.0)

The app is currently in version 1.0 and is considered mostly complete. It has undergone rigorous development, testing, and refinement to ensure a stable and reliable user experience. Here are some key points regarding the current state of the app:

- Core Functionality: The app includes all the essential features mentioned above, providing a solid foundation for users to connect and engage within their university community.
- User Interface: The user interface has been designed with a focus on simplicity, intuitive navigation, and a clean aesthetic, ensuring a user-friendly experience.
- Bug Fixes and Improvements: The development team has addressed reported bugs, implemented necessary enhancements, and optimized performance to provide a smooth and efficient user experience.
- Security and Data Privacy: The app follows industry best practices to ensure the security and privacy of user data, employing encryption, authentication mechanisms, and adhering to data protection regulations.

## Installation and Usage

To use the app, simply visit our presentation website and explore the provided features and functionalities. As it is a presentation website, no installation or setup is required.

## Future Development 🗓️

While Version 1.0 of the app is mostly complete, we have an exciting roadmap for future development. Some upcoming features and improvements include:

- Integration with other university systems, such as course management platforms and student portals.
- Enhanced search functionality for discovering groups, events, and relevant content.
- Integration with popular social media platforms for seamless sharing and cross-platform engagement.
- Implementation of advanced analytics to gain insights into user engagement and app usage patterns.
- Continuous improvement based on user feedback and evolving needs within university communities.

We are committed to delivering an exceptional social media experience for universities, and we look forward to further enhancing and expanding the app's capabilities.

## Feedback and Contributions

We value your feedback and suggestions. If you have any ideas, encounter any issues, or would like to contribute to the project, please reach out to our development team via the contact information provided on the presentation website.

Thank you for your interest in our social media app for universities!



## 🤔 What's changed

This is an rewrite & major changes from previous version. Everything has changed here. Web framework, layouts, design, colors, theme, routing, etc. is re-designed and improved massively. I am now using Nuxt as web framework.

## :gem: Features

-   🎨 Modern design
-   💨 Blazing-fast performance
-   🚀 Fast build-time with Vite
-   ⚡️ Better routing performance
-   🏃️ Transitions while routing
-   🚧 Dynamic error handing
-   🤟 Better layouting
-   🎴 Card-as-container system
-   👀 you tell me

## 🗓️ Roadmap

I will put this here because I know well I won't do them. Things that can be added or improved, priority, and the reason why I didn't do it:

| Task name                    | Priority | Reason                                                                                                                                                                                                            |
| ---------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🔍 Massive SEO               | High     | I was planning to rank up this website on Google & other search engines by taking SEO adventages. But I think it's bit confusing to understand about it. Unless something good happens, I will do this on next PR |
| 📱 Progressive Web App (PWA) | Low      | Too lazy to create a service-workers, serving lots of 64x64, 128x128, 256x256 icons, and there is a lot additional meta for PWA (apple-touch-icon, etc), and who cares about installable website?                 |

## 🧑‍💻️ Developing

To get this running on your machine, you could try these steps below:

### 🛠️ Requirements

A [node.js](https://nodejs.org) >= 12.16.2 setup with [pnpm](https://pnpm.io) is highly recommended.

### 📥️ Clone the repository

```bash
$ git clone https://github.com/gifaldyazkaa/chocolattech.git
$ cd chocolattech
```

### 📦️ Install dependencies

```bash
$ npm install
```

### 🏃️ Run it on development server

```bash
$ npm run dev
# Running on http://localhost:3000
# or
$ npm run dev --host=0.0.0.0
# Running on http://localhost:3000
# Running on http://192.x.x.x:3000
```

### ⚡️ Optimizing for production

```bash
# Server deployment (SSR)
$ pnpm run build

# Static deployment (Pre-rendered)
$ pnpm run generate
```

## 📃️ License

Source code distributed under MIT License. See [LICENSE](./LICENSE) for more information.
