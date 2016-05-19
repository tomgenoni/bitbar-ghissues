# Github issues in your menubar

![alt tag](https://raw.githubusercontent.com/tomgenoni/bitbar-ghissues/master/bb.png)

This uses the super cool [Bitbar](https://github.com/matryer/bitbar) to retrieve and display open Issues and Pull Requests, up to 100, for any public or private repo you have permissions for. In the image above I'm monitoring Bitbar's repo which has 5 Pull Requests and 35 Issues.

In addition this script also searches the comments of each Pull Request for "fixes". If an Issue has been referenced in a Pull Request comment using any of Github's [special keywords](https://help.github.com/articles/closing-issues-via-commit-messages/) the Issue will be colored light gray. In image above note the first Issue. It's gray because in the second Pull Request (#270) there's a comment that includes "Resolves #269".

I use this plugin as a todo list and find it helpful to know if an Issue has already been addressed, even though the fix hasn't yet been merged and closed.

## Installation

- Download the [Bitbar application](https://github.com/matryer/bitbar/releases/latest)
- Run and set the "Plugin Folder...". I put mine in `~/Documents/Bitbar/`.
- Download [this repository](https://github.com/tomgenoni/bitbar-ghissues/archive/master.zip) and copy `repo-issues.5m.js` into your Bitbar plugins folder.
 
## Configure

Open `repo-issues.5m.js` and populate the variables.

For example, if you want to monitor https://github.com/matryer/bitbar your configuration would look like:

```
$HOSTNAME = ""; <-- only for enterprise users, e.g., `github.tinderforcats.com/api/v3`
$ORG = "matryer"; <-- your organization name or username
$REPOSITORY = "bitbar"; <-- the repo you want to monitor
$BITBAR_TITLE = "bitbar"; <-- the title you want to appear in the menu bar
$GITHUB_ACCESS_TOKEN = ""; <-- your Github personal access token
```

Refresh or reopen the Bitbar application and if all went well you should see it appear in your menu bar.

### Notes

- You'll need to generate a [Github access token](https://github.com/settings/tokens). On that page click "Generate Token" in the upper right and on the following page "Generate Token" again. Your token will be a long string of letters and numbers.
- You can rename the plugin to anything you want, like `myrepo.5m.js`. See the [Bitbar readme](https://github.com/matryer/bitbar) for file name syntax. If you want to monitor multiple repositories simply duplicate the `repo-issues.5m.js` file and update its configuration variable values.

## Troubleshooting

- If you've installed Node in a non-standard location you will need to update your node path at the top of the file. If you're not sure you can check your path in the terminal using `which node`.
- If you suspect a file permissions error run `chmod +x repo-issues.5m.js`.
- You can change the refresh frequency by changing the filename as described in the [Bitbar readme](https://github.com/matryer/bitbar) .
- Github enforces [rate limits](https://developer.github.com/v3/#rate-limiting) so keep that in mind when adjusting the refresh frequency. If you exceed the hourly limit the script will fail until the rate limiting period expires.
