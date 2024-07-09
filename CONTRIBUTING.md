# Contributing to KilahUI

Thank you for considering contributing to KilahUI! Please follow the guidelines below to ensure a smooth process for everyone involved.

## Getting Started

### Fork the Repository

1. Fork the repository by clicking the "Fork" button at the top right of the repo page.
2. Clone the forked repository to your local machine using:

   ```bash
   git clone https://github.com/your-username/[repo-name].git

### Create a Branch

Create a new branch from the dev branch. The branch name should follow the format add/{component}:

```bash
   git switch -c add/[component] dev
```

Replace {component} with the specific name of the components you are working on.

### Create a New Folder (If you are working on a full category)

1. Inside the `public/components` directory, create a new folder named after your specific component. Use lowercase letters and hyphens to join words if the component name has more than one word:

   ```bash
   mkdir -p public/components/{component-category}

Replace {component-category} with the specific name of your component in lowercase and joined by hyphens if necessary.

### Add Components (If you are only adding compoennts start here)

1. Inside the folder you created in `public/components/{component-category}`, add an `{component-name}.html` file. This file will contain the HTML structure for your component.

2. Start writing the HTML structure for your component within the `{component-name}.html` file. (Only the compoennt itself)

### Update the `index.ts` File

1. Open the `src/content/index.ts` file.
2. Add a new element to the `category` array following this schema:

   ```typescript
   {
     section: "cool-section" , // The section where this component belongs This will be a general way of group compoennts ex marketing, dashboard, general-ui
     title: "Cool Section",// The title of the section
     slug: "{category}", // The same name as the folder created in the previous step
     container: "{Container Height}", // The height of the playground container, e.g., "40rem"
     components: [
       {
         title: "{Subcomponent Title 1}", // Title of the component
         fileName: "{file-name-1}", // The name of the file to be added
         tailwindConfig: "{object}" // An object with the tailwind config used for the current component
             },
           
       // Add more components as needed
     ],
   },

### Open a PR

1. When finish, commit your changes, open a PR to `dev` and wait for the merge confirmation.

# Thanks for your contribution

## 🤝🤝🤝
 We appreciate your help!
 If you have any questions or need further assistance, please reach out.