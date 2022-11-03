chrome.tabs.onUpdated.addListener(async (tabId, info) => {
    const query = { active: true, lastFocusedWindow: true }
    const result = await chrome.tabs.query(query)

    if (info.status === 'loading') {

        function inject() {

            if (!document.body.querySelector(".myclass")) {

                const URL = "https://i.imgur.com/cDEST92.gif"

                function hover() {
                    const amibo = document.body.querySelector(".MyAmobi");
                    var x = null;
                    var y = null;

                    document.addEventListener('mousemove', onMouseUpdate, false);

                    function onMouseUpdate(e) {
                        x = e.pageX;
                        y = e.pageY;
                        if (x < 300 && y > 600) {
                            amibo.style.opacity = 0.1;
                        }
                        else {
                            amibo.style.opacity = 1;
                        }
                    }
                }

                function MyAmobiCréator() {
                    var div = document.createElement('div');
                    div.innerHTML = `<img class="MyAmobi" src="${URL}">`;
                    // better to use CSS though - just set class
                    div.setAttribute('class', 'myclass'); // and make sure myclass has some styles in css
                    document.body.appendChild(div);
                    hover()
                }
                MyAmobiCréator();
            }
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