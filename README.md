<h1 align="center">Welcome to my personal-website-template 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
</p>

### 🏠 [Homepage](https://simeonheupel.com)

## Template

This project is designed to serve as a template for creating your own personal website based on the [JSON Resume](https://jsonresume.org/) protocol with minor adjustments.

- Built using [React](https://reactjs.org/)
- Bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
- Styled with [Material-UI](https://mui.com/)
- Deployed with [Vercel](https://vercel.com/)
- Domain purchased with [Strato](https://www.strato.de/)
- Hosted at [simeonheupel.com](https://simeonheupel.com)

I want to thank [@JoHoop](https://github.com/JoHoop), [@bchiang7](https://github.com/bchiang7), [Arlen Mccluskey](https://www.arlenmccluskey.com/) and [Charles Bruyerre](https://itssharl.ee/) for the inspiration.

Now you can follow these steps to use the template for your own personal website:

## Installation

In order to run this project locally you need to have [Node.js](https://nodejs.org/en/) installed. After that you can run:

```sh
git clone https://github.com/heupelS/personal-website-template.git
cd personal-website-react
```

to clone the repository and navigate to the project directory.

```sh
npm install
```

to install all dependencies.

## Usage

```sh
npm run start
```

to run the app in the development mode at http://localhost:3000

## Customization

### Content

Open the [resume.json](src/assets/resume.json) file. Customize the content with your personal information, work experience, education, and any other relevant details following the [JSON Resume](https://jsonresume.org/) protocol. The official documentation can be found [here](https://jsonresume.org/schema/).

### Styling

Open the [Palette.js](src/components/themes/Palette.js) file in order to specify your prefered colororing, fonts and MUI components. Customize the theme with your personal preferences. The official documentation for the Material-UI theme can be found [here](https://mui.com/customization/theming/). The official documentation for the Material-UI components can be found [here](https://mui.com/material-ui/). If you want to customize the gradient filling for some icons, you can do so in the [GradientSVG.js](src/components/utils/GradientSVG.js) file, by replacing it with a new svg component.

## Author

👤 **Simeon Heupel**

- Website: [simeonheupel.com](https://simeonheupel.com)
- Github: [@heupelS](https://github.com/heupelS)
- LinkedIn: [@simeon-heupel](https://linkedin.com/in/simeon-heupel)
