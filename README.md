# Vite React + TS Template v4.4.11: Lightning-Fast Frontend Development Made Easy

<div align="center">
  <img src="./assets/vite.svg" alt="vite-svg" width="250" height="250">
</div>

# Solid Templates (using [vite](https://vitejs.dev/))

This repository holds most of the official starter templates for
[vite](https://vitejs.dev/).

You get:

- React
- TypeScript
- ESLint
- Prettier
- Alias
- Reac Router Dom

## Get started

```bash
# React + TS Template

$ npm install
$ npm run dev
```

```bash
# vite.config.ts

1. Open the root directory of your project where the vite.config.ts file is located.
2. Open the vite.config.ts file in a text editor or integrated development environment.
3. Change the value of the base property to the new name of your repository. For example, if your GitHub repository is named "my-github-repo," you can modify base like this:

export default defineConfig({
	...
	base: 'my-github-repo',
	...
  },

  ...
});
4. Save the changes.
```

```bash

# packege.json
1. Open the package.json file.
2. Locate the homepage property in your package.json. It may look like this:
"homepage": "https://yourusername.github.io/your-repo-name/",
3. Replace the "https://yourusername.github.io/your-repo-name/" with the actual URL of your GitHub repository.
Make sure to replace yourusername with your GitHub username and your-repo-name with the name of
your GitHub repository.
4. Save the changes.
```

```bash
# Start localhost

1. Update repo name in file main.tsx <BrowserRouter basename="/YOUR REPO NAME">.
2. Save file.
$ npm run dev
For TypeScript use also "tsc -w"
```

```bash
# Deploy

1. Open your GitHub repository and choose settings.
2. Click on the "Actions" tab located In the left sidebar and choose General.
3. Scroll down to find the "Workflow permissions" section.
4. In the "Workflow permissions" section, select "Read and write permissions"
to allow actions workflows to read and write data.

"Your project is now ready for deployment. You have successfully configured the necessary settings.
It's time to make your first push to the repository."
```

```bash
# Create link-page

1. Open your GitHub repository and choose settings.
2. Click "Pages" in left sidebar.
3. Chose "gh-pages" Branch from drop-down menu.
4. Click "Save".


"Your site is live now."
```
