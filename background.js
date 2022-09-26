const contextMenuItem = {
  id: "wolstenhol-share",
  title: "Add to reading list",
  contexts: ["page"],
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener((clickData, tab) => {
  if (clickData.menuItemId === "wolstenhol-share") {
    const url = new URL("https://wolstenhol.me/submit-reading-item/");

    url.searchParams.append("title", tab.title);
    url.searchParams.append("url", tab.url);

    chrome.windows.create({
      url: url.href,
      type: "popup",
      width: 880,
      height: 700,
    });
  }
});
