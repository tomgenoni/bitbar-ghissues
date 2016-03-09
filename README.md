# Github issues in your menubar

![alt tag](https://raw.githubusercontent.com/tomgenoni/bitbar-ghissues/master/bit.png)

This uses the super cool [Bitbar](https://github.com/matryer/bitbar) to retrieve and display open issues and pull requests for a given repository.

The plugin also looks in the comments of each pull request for "fixes". If an issue has been referenced in a pull request comment using the [special keywords](https://help.github.com/articles/closing-issues-via-commit-messages/) the issue will be colored light gray in the menu.

I use this plugin as a todo list so it's helpful to know if an issue has already been addressed, even though it hasn't been closed yet.

## Installation

- Download the [Bitbar application](https://github.com/matryer/bitbar/releases/latest)
- Run and set the "Plugin Folder...". I put mine in `~/Documents/Bitbar/`.
- Quit Bitbar (you'll restart it later).
- Download [this repository](https://github.com/tomgenoni/bitbar-ghissues/archive/master.zip) and copy the following into your Bitbar plugins bar.
 - `repo-issues.5m.js`
 - `lib` directory
 
## Configure

In order to use the script you'll want to open `repo-issues.5m.js` and populate the variables.

You'll need to generate a [Github access token](https://github.com/settings/tokens). You can click "Generate Token" in the upper right and on the following page "Generate Token" again. Your token will be a long string of letters and numbers.

For example, if you want to monitor https://github.com/matryer/bitbar your configuration would look like:

```
$ORG = "matryer"; <-- your organization name or username
$REPOSITORY = "bitbar"; <-- the repo you want to monitor
$BITBAR_TITLE = "bitbar"; <-- the title you want to appear in the menu bar
$GITHUB_ACCESS_TOKEN = ""; <-- your Github personal access token
```

Now you can reopen the Bitbar application and if all went well you should see it appear in your menu bar.
