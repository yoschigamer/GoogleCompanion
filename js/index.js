chrome.tabs.onUpdated.addListener(async (tabId, info) => {
    const query = { active: true, lastFocusedWindow: true }
    const result = await chrome.tabs.query(query)

    if (info.status === 'loading') {

        function inject() {

            var div = document.createElement('div');
            div.innerHTML = '<img src="https://i.imgur.com/cDEST92.gif">';
            // better to use CSS though - just set class
            div.setAttribute('class', 'myclass'); // and make sure myclass has some styles in css
            document.body.appendChild(div);

            console.log("dqzd");
        }

        chrome.scripting.executeScript(
            {
                target: {
                    tabId: result[0].id
                },
                func: inject
            }
        );
    }
});

console.log("dddddddddddd");