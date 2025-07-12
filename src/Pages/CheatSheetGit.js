import React, { use, useState } from 'react';
import CheatSheetLayout from '../components/CheatSheetLayout';


function CheatSheetGit() {
  const [gitCheats,setGitCheats]= useState([
    {
      title: "1. Initialize Repository",
      code: `# Create a new Git repository
  git init
  
  # Initialize with a specific branch name
  git init -b main
  
  # Initialize in existing directory
  cd my-project
  git init`
    },
    {
      title: "2. Clone Repository",
      code: `# Clone from GitHub
  git clone https://github.com/username/repository.git
  
  # Clone to specific folder
  git clone https://github.com/username/repository.git my-folder
  
  # Clone specific branch
  git clone -b develop https://github.com/username/repository.git
  
  # Clone with limited history (shallow clone)
  git clone --depth 1 https://github.com/username/repository.git`
    },
    {
      title: "3. Check Status",
      code: `# Check repository status
  git status
  
  # Short status format
  git status -s
  
  # Check status with ignored files
  git status --ignored
  
  # Check status of specific file
  git status filename.txt`
    },
    {
      title: "4. Add Files",
      code: `# Add all files
  git add .
  
  # Add specific file
  git add filename.txt
  
  # Add multiple files
  git add file1.txt file2.txt
  
  # Add all files with specific extension
  git add *.js
  
  # Add files interactively
  git add -i
  
  # Add all tracked files (staged changes)
  git add -u`
    },
    {
      title: "5. Commit Changes",
      code: `# Commit with message
  git commit -m "Add new feature"
  
  # Commit all tracked files
  git commit -am "Update existing files"
  
  # Commit with detailed message
  git commit -m "feat: add user authentication
  
  - Add login functionality
  - Implement password validation
  - Update user model"
  
  # Amend last commit
  git commit --amend -m "Updated commit message"`
    },
    {
      title: "6. View History",
      code: `# View commit history
  git log
  
  # One line format
  git log --oneline
  
  # Graph format
  git log --graph --oneline --all
  
  # Show specific number of commits
  git log -n 5
  
  # Show commits by author
  git log --author="John Doe"
  
  # Show commits for specific file
  git log -- filename.txt`
    },
    {
      title: "7. Create and Switch Branches",
      code: `# Create new branch
  git branch feature-branch
  
  # Create and switch to new branch
  git checkout -b feature-branch
  
  # Modern way (Git 2.23+)
  git switch -c feature-branch
  
  # Switch to existing branch
  git checkout main
  git switch main
  
  # List all branches
  git branch -a`
    },
    {
      title: "8. Merge Branches",
      code: `# Merge branch into current branch
  git merge feature-branch
  
  # Merge with no fast-forward
  git merge --no-ff feature-branch
  
  # Abort merge if conflicts
  git merge --abort
  
  # Merge specific commit
  git merge commit-hash
  
  # Squash merge
  git merge --squash feature-branch`
    },
    {
      title: "9. Rebase",
      code: `# Rebase current branch onto main
  git rebase main
  
  # Interactive rebase
  git rebase -i HEAD~3
  
  # Continue rebase after resolving conflicts
  git rebase --continue
  
  # Abort rebase
  git rebase --abort
  
  # Rebase specific commit
  git rebase -i commit-hash`
    },
    {
      title: "10. Remote Operations",
      code: `# Add remote repository
  git remote add origin https://github.com/username/repo.git
  
  # List remotes
  git remote -v
  
  # Remove remote
  git remote remove origin
  
  # Fetch from remote
  git fetch origin
  
  # Pull changes
  git pull origin main
  
  # Push changes
  git push origin main`
    },
    {
      title: "11. Stash Operations",
      code: `# Stash current changes
  git stash
  
  # Stash with message
  git stash push -m "WIP: working on feature"
  
  # List stashes
  git stash list
  
  # Apply last stash
  git stash pop
  
  # Apply specific stash
  git stash apply stash@{1}
  
  # Drop stash
  git stash drop stash@{0}
  
  # Clear all stashes
  git stash clear`
    },
    {
      title: "12. Reset and Revert",
      code: `# Soft reset (keep changes staged)
  git reset --soft HEAD~1
  
  # Mixed reset (default, unstage changes)
  git reset HEAD~1
  
  # Hard reset (discard all changes)
  git reset --hard HEAD~1
  
  # Reset to specific commit
  git reset --hard commit-hash
  
  # Revert last commit
  git revert HEAD
  
  # Revert specific commit
  git revert commit-hash`
    },
    {
      title: "13. Checkout Files",
      code: `# Discard changes in working directory
  git checkout -- filename.txt
  
  # Restore file from specific commit
  git checkout commit-hash -- filename.txt
  
  # Restore file from last commit
  git checkout HEAD -- filename.txt
  
  # Modern way (Git 2.23+)
  git restore filename.txt
  
  # Restore staged changes
  git restore --staged filename.txt`
    },
    {
      title: "14. Diff Operations",
      code: `# Show unstaged changes
  git diff
  
  # Show staged changes
  git diff --staged
  
  # Show changes between commits
  git diff commit1..commit2
  
  # Show changes in specific file
  git diff filename.txt
  
  # Show changes with word diff
  git diff --word-diff
  
  # Show changes with color
  git diff --color-words`
    },
    {
      title: "15. Tags",
      code: `# Create lightweight tag
  git tag v1.0.0
  
  # Create annotated tag
  git tag -a v1.0.0 -m "Release version 1.0.0"
  
  # List all tags
  git tag
  
  # Show tag details
  git show v1.0.0
  
  # Delete tag
  git tag -d v1.0.0
  
  # Push tags to remote
  git push origin --tags
  
  # Push specific tag
  git push origin v1.0.0`
    },
    {
      title: "16. Cherry Pick",
      code: `# Cherry pick specific commit
  git cherry-pick commit-hash
  
  # Cherry pick multiple commits
  git cherry-pick commit1 commit2 commit3
  
  # Cherry pick range
  git cherry-pick commit1..commit3
  
  # Cherry pick without auto-commit
  git cherry-pick --no-commit commit-hash
  
  # Continue cherry pick after conflicts
  git cherry-pick --continue
  
  # Abort cherry pick
  git cherry-pick --abort`
    },
    {
      title: "17. Submodules",
      code: `# Add submodule
  git submodule add https://github.com/username/repo.git
  
  # Initialize submodules
  git submodule init
  
  # Update submodules
  git submodule update
  
  # Update all submodules
  git submodule update --init --recursive
  
  # Remove submodule
  git submodule deinit path/to/submodule
  git rm path/to/submodule`
    },
    {
      title: "18. Aliases",
      code: `# Create useful aliases
  git config --global alias.co checkout
  git config --global alias.br branch
  git config --global alias.ci commit
  git config --global alias.st status
  
  # Now you can use:
  git co main
  git br feature
  git ci -m "message"
  git st
  
  # Create custom aliases
  git config --global alias.lg "log --oneline --graph --all"
  git config --global alias.unstage "reset HEAD --"`
    },
    {
      title: "19. GitHub CLI",
      code: `# Install GitHub CLI
  # macOS: brew install gh
  # Windows: winget install GitHub.cli
  # Linux: sudo apt install gh
  
  # Login to GitHub
  gh auth login
  
  # Create repository
  gh repo create my-project --public
  
  # Clone repository
  gh repo clone username/repository
  
  # Create pull request
  gh pr create --title "Add new feature"
  
  # View pull requests
  gh pr list
  
  # Merge pull request
  gh pr merge 123 --merge`
    },
    {
      title: "20. Advanced Commands",
      code: `# Show commit tree
  git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit
  
  # Find commits containing text
  git log -S "search term"
  
  # Show file history
  git log --follow filename.txt
  
  # Show blame
  git blame filename.txt
  
  # Bisect to find bad commit
  git bisect start
  git bisect bad
  git bisect good commit-hash
  
  # Clean untracked files
  git clean -n  # Dry run
  git clean -f  # Force clean`
    }
  ]);
  
  return <CheatSheetLayout title="Git & GitHub Cheat Sheets" cheats={gitCheats} />;
}

export default CheatSheetGit; 