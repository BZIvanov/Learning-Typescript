# Working with Git

## General commands

- **mkdir somename** - will create folder in the folder where to command is used
- **cd somename** - will open the specified folder someName
- **. code** - will open VS Code in current folder

## Git terminology

- HEAD - it refers the currently selected / checkedout branch
- detached head - means change the HEAD from the branch to specific commit. Each commit has unique name known as hash
- hash - the specific name of each commit, that name is used to navigate through the whole tree

## Git commands

- **git commit** - will commit our current work to the checkedout/current branch
- **git branch somename** - will create a new branch with the name provided
- **git checkout somename** - after a new branch is created it will not be the default selected one, with the checkout command we can select it so following command will be used on it. Somename could be not only a branch, but also specific commit. If we select specific commit by its hash we will detached the HEAD and the HEAD will point the current commit
- **git merge somename** - will merge somename branch to the checkedout/current branch
- **git rebase somename** - will make the checkedout/current branch a child to the specified branch somename, somename will become the ancestor
- **git checkout HEAD^** - by selecting specific commit we detached the HEAD from the branch. And by using the ^ symbol we will select the first level ancestor of the HEAD, HEAD is now the currently selected commit
- **git branch -f master HEAD~3** - will force the master branch to go back with 3 levels up in the tree
