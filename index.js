fetch('https://ntfy.sh/arufus_test', {
    method: 'POST', // PUT works too
    headers: {"Title" : "Check the senior website!"},
    body: `There's a new scholarship available!`,
})