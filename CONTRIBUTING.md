# Contribution Guidelines for jis3r/icons

First off all, thanks for taking the time to contribute! ❤️

The following is a set of guidelines for contributing to jis3r/icons. Feel free to propose changes to this document in a pull request.

## Pull Requests

Feel free to open a pull-request to contribute to this project.

**Working on your first Pull Request?** You can learn how from this _free_ series

[How to Contribute to an Open Source Project on GitHub](https://app.egghead.io/playlists/how-to-contribute-to-an-open-source-project-on-github)

Guidelines for pull requests:

- **Make your commit messages as descriptive as possible.** Include as much information as you can. Explain anything that the file diffs themselves won’t make apparent.

- **Document your pull request**. Explain your fix, link to the relevant issue, add screenshots when adding new icons.

- **Make sure the target of your pull request is the relevant branch**. Most of bugfix or new feature should go to the `main` branch.

- **Include only related work**. If your pull request has unrelated commit, it won't be accepted.

## Icon Guidelines

- **Icon names should be in kebab-case.** For example, `arrow-up` or `chevron-left`.

- **Icon names must be identical to their lucide counterpart.**

- **Icons must be added as .svelte components.**

- **Icons must be added to the `src/lib/icons` directory.**

- **Only use vanilla CSS to create the animations.** No libraries like svelte-motion.

## Icon Requests

Before creating an icon request, please search to see if someone has requested the icon already. If there is an open request, please add a :+1:.

## Development

To contribute to the project, follow these steps:

1. Fork the repository on GitHub.

2. Clone your forked repository to your local machine:

```
git clone https://github.com/your-username/icons.git
```

3. Navigate to the project directory:

```
cd icons
```

4. Create a new branch for your feature or bug fix:

```
git checkout -b your-branch-name
```

5. Install the project dependencies:

```
npm i
```

6. Make your changes to the codebase. If you are not adding an icon, you can skip the next step.

7. If you want to test an icon addition, you must make sure you have cloned the lucide repository and have it in the same directory as this repository. Then use the index script to add the icon and test it locally:

```
npm run index

npm run dev
```

8. Once you finished testing, build the project:

```
npm run prep
```

This script reexports icons for npm, creates registry for shadcn-svelte, builds and formats the project.

9. Test the application to ensure your changes work as expected.

```
npm run build
npm run preview
```

10. Commit your changes:

```
git commit -m "Your commit message"
```

11. Push your changes to your fork:

```
git push origin your-branch-name
```

12. Open a pull request on the original repository.

Thank you for contributing to the project!
