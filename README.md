# tkhang1999.github.io

![GitHub CI](https://img.shields.io/github/actions/workflow/status/tkhang1999/tkhang1999.github.io/cicd.yml?branch=master)
![codecov.io Code Coverage](https://img.shields.io/codecov/c/github/tkhang1999/tkhang1999.github.io/master)
![CodeFactor Code Quality](https://img.shields.io/codefactor/grade/github/tkhang1999/tkhang1999.github.io/master)

This is my responsive personal website built using React and CSS

## How to run?

- Install all dependencies and start the web app as follows

```
$ npm install
$ npm start
```

- [gh-page](https://github.com/tschaub/gh-pages) is used to depoy React app to GitHub Pages. Deploy the web app to `homepage` address defined in `package.json` as follows

```
$ npm run deploy
```

- Different test run options are defined in `package.json`. Run tests with coverage as follows

```
$ npm run test:coverage
```

## References

- [Stylings](https://github.com/bedimcode/portfolio-responsive-complete)
- [Deployment](https://dev.to/dyarleniber/setting-up-a-ci-cd-workflow-on-github-actions-for-a-react-app-with-github-pages-and-codecov-4hnp)
