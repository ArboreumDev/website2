# Arboreum Revolution Website

Revolution for Arboreum Website

## Installation

### Using `yarn`

This project uses `yarn`. Install it as described here [https://yarnpkg.com/lang/en/](https://yarnpkg.com/lang/en/) if you haven't already.

To install this project, simply clone the repo and run `yarn`;

e.g.

    git clone https://github.com/ArboreumDev/website2.git
    cd website2
    yarn

This will install all the dependencies for the project locally.

### Using `npm`

You can also use `npm`. Install it as described here [https://www.npmjs.com/get-npm](https://www.npmjs.com/get-npm), if you dont have it already.

To install this project, simply clone the repo and run `npm install`;

e.g.

    git clone https://github.com/ArboreumDev/website2.git
    cd website2
    npm install

This will install all the dependencies for the project locally.

## Local Development

In the project directory, you can run:

### `yarn dev`

(if using yarn)

or

### `npm run dev`

(if using npm)

Runs the app in the development mode.
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

## Deployement

The website has a continuous integration using netlify. Any changes that are pushed to the main branch will automatically be deployed to the production.

## Editing or Changes to the Website

To do any edit to the website first install the website locally. Do the changes locally and test it locally using `yarn dev`. Once you are the satified with the changes and there are no bugs or errors push the changes to master branch and the wbesite (with the changes will be deployed automatically)

### Pushing the changes to master

First add all the untracked and modified file to the staging area. For that you can run:

#### `git add .`

This will add all the untracked files to staging. You can add individual files to the stging area by using:

### `git add <filenames>`

_For example `git add file1.js image.png index.html` to add only `file1.js`, `image.png` and `index.html` to the staging area_

Then you will have to commit all the changes to local branch using:

#### `git commit -m "<your commit message>"`

Commit message helps in tracking the changes in the project which can be useful when working in a team.

You can also combine the add and commit step using:

#### `git commit -am "<your commit message>"`

Now you are ready to push the commits to master. For that you can use:

#### `git push -u origin main`
