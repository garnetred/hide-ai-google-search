# Reddit to Old Reddit

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/decemberthedeveloper)

## Abstract
This Chrome extension automatically redirects Reddit to Old Reddit. It should work as long as old.reddit.com does.

## Tech Stack
This project uses vanilla JS, CSS, and HTML.

## Setup/Installation
You can clone the repo locally using `git clone`.

### Chrome (and other Chromium-based Browsers)

[This article](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked) offers detailed instructions on loading an unpacked chrome extension. You can navigate to the chrome extensions page via the puzzle piece icon in the toolbar. Enable "developer mode" on the top-right. From there, you can click "load unpacked extension" and choose the folder via the popup. You should then see the reddit icon appear in the toolbar. When you click on it, you can see "Reddit to Old Reddit."

If you navigate to `www.reddit.com` or any other URL on Reddit, you should be automatically redirected to the `old.reddit.com` version of the page instead.

### Firefox
Open Firefox and go to `about:addons`. After clicking the gear icon at the top right, there should be an option to install the add-on from a file. When the dialog window opens, select the xpi file.

Then navigate to Reddit. There will be an indicator light underneath the puzzle piece icon for the add-ons in the toolbar. Once clicked, there will be a prompt for the user to enable permissions for reddit. Once permissions have been enabled and the page refreshed, users should be directed to old.reddit.com whenever they navigate to reddit.com.

## Screenshots


## Future Changes
Once Firefox adds more support for MV3, I hope to make this a cross-browser extension.
