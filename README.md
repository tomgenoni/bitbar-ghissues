# Github issues in your menubar

![alt tag](https://raw.githubusercontent.com/tomgenoni/bitbar-ghissues/master/bit.png)

This uses the super cool [Bitbar](https://github.com/matryer/bitbar) to retrieve and display open issues and pull requests, up to 100, for any public or private repo you have permissions for. In the image above I'm monitoring Bitbar's repo which has 3 pull requests and 33 issues.

In addition this script also searches the comments of each pull request for "fixes". If an issue has been referenced in a pull request comment using any of Github's [special keywords](https://help.github.com/articles/closing-issues-via-commit-messages/) the issue will be colored light gray. In image above note the fifth issue. It's gray because in the first pull request (#259) there's a comment that includes "Fixes #237".

I use this plugin as a todo list and I find it helpful to know if an issue has already been addressed, even though the fix hasn't yet been merged and closed.

## Installation

- Download the [Bitbar application](https://github.com/matryer/bitbar/releases/latest)
- Run and set the "Plugin Folder...". I put mine in `~/Documents/Bitbar/`.
- Quit Bitbar (you'll restart it later).
- Download [this repository](https://github.com/tomgenoni/bitbar-ghissues/archive/master.zip) and copy the following into your Bitbar plugins folder.
 - `repo-issues.5m.js`
 - `lib` directory
 
## Configure

Open `repo-issues.5m.js` and populate the variables.

For example, if you want to monitor https://github.com/matryer/bitbar your configuration would look like:

```
$ORG = "matryer"; <-- your organization name or username
$REPOSITORY = "bitbar"; <-- the repo you want to monitor
$BITBAR_TITLE = "bitbar"; <-- the title you want to appear in the menu bar
$GITHUB_ACCESS_TOKEN = ""; <-- your Github personal access token
```

Now you can reopen the Bitbar application and if all went well you should see it appear in your menu bar.

### Notes

- You'll need to generate a [Github access token](https://github.com/settings/tokens). On that page click "Generate Token" in the upper right and on the following page "Generate Token" again. Your token will be a long string of letters and numbers.
- You can rename the file anything you want, like `myrepo.5m.js`. See the [Bitbar readme](https://github.com/matryer/bitbar) for file name syntax. If you want to monitor multiple respositories simply duplicate the `repo-issues.5m.js` file and update its configuration variable values.

## Troubleshooting

- If you suspect a file permissions error run `chmod +x repo-issues.5m.js`.
- You can change the refresh frequency by changing the filename as described in the [Bitbar readme](https://github.com/matryer/bitbar) .
