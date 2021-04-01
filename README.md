# use-my-ghp-lib

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Goal

test project to use the [@erkobridee/my-ghp-lib](https://github.com/erkobridee/my-ghp-lib) from the GitHub Packages

## Project setup

```
npx create-next-app use-my-ghp-lib --use-npm

cd use-my-ghp-lib

npm i -D @types/react @types/react-dom @types/node typescript

touch tsconfig.json

next dev
```

### Configuring npm for use with GitHub Packages

> **TODO:** create a [GITHUB_PAT](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) with the access to only read packages
>
> [Configuring npm for use with GitHub Packages | GitHub Docs](https://docs.github.com/en/packages/guides/configuring-npm-for-use-with-github-packages)

There are 2 possible ways to access and use packages from the GitHub packages

#### .npmrc

> useful to use on CI/CD pipelines

```
//npm.pkg.github.com/:_authToken=${GITHUB_PAT}

@erkobridee:registry=https://npm.pkg.github.com/
```

#### login into the GitHub Packages

> recommended on the developer machine, this will add the access to the global .npmrc file

```
$ npm login --scope=@erkobridee --registry=https://npm.pkg.github.com

> Username: USERNAME
> Password: GITHUB_PAT
> Email: PUBLIC-EMAIL-ADDRESS

$ echo "@erkobridee:registry=https://npm.pkg.github.com/" >> ~/.npmrc
```

## CLI commands

- development: `npm start` - ( http://localhost:3000 )

## Documentation

- [Next.js](docs/nextjs.md)

- GitHub

  - [GitHub Packages](docs/github-packages.md)

  - [GitHub Action](docs/github-actions.md)

- [Dev environment known issues](docs/dev-env-known-issues.md)

## Useful reference

- [Private NPM Packages with GitHub Actions & Packages | Brian Morrison II](https://brianmorrison.me/blog/private-npm-packages-with-github-actions-&-packages/)

  - [[YouTube] Private NPM Packages using GitHub Actions & Packages](https://www.youtube.com/watch?v=7CNC0QBCY-Y) - 2020/09/29

- [Github Actions with private package (Github Package Registry or NPM) | charliejwalter.net](https://charliejwalter.net/github-actions-with-private-package-github-package-registry-or-npm/) - 2020/03/31

- [Deploying a Next.js app to GitHub Pages - DEV Community 👩‍💻👨‍💻](https://dev.to/jameswallis/deploying-a-next-js-app-to-github-pages-24pn) - 2020/02/26

- [[GitHub] erkobridee/nextjs-ssg-hello](https://github.com/erkobridee/nextjs-ssg-hello)

- [Going Truly Serverless with Next.js Static Site Generation](https://zzzachzzz.github.io/blog/going-truly-serverless-with-nextjs-static-site-generation) - 2021/02/20

---

- [[GitHub Action] Cancel Workflow Action](https://github.com/marketplace/actions/cancel-workflow-action)

- [GitHub Actions: Manual triggers with workflow_dispatch | GitHub Blog](https://github.blog/changelog/2020-07-06-github-actions-manual-triggers-with-workflow_dispatch/) - 2020/06/06

### GitHub Action know issue

- [Github package registry - Private package not found](https://github.community/t/github-package-registry-private-package-not-found/14500)

> if you're consumir a GitHub package from a different account or from a GitHub organization, you'll need to have a GitHub Personal Access Token from there with the rights to read GitHub Packages
