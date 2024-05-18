chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  const tabUrl = tab.url ?? tab.pendingUrl;
  if (
    (changeInfo.status === 'complete' &&
      tabUrl &&
      tabUrl.includes('google.com/search'))
  ) {
    try {
      await chrome.scripting.insertCSS({
        target: { tabId: tabId },
        files: ['css/global.css'],
      });
    } catch (err) {
      console.error(`CSS not inserted due to this error: ${err} in ${tabUrl}`);
    }
  }
});
