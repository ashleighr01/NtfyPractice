fetch('https://ntfy.sh/arufus_test', {
    method: 'POST', // PUT works too
    body: "There's a new scholarship available!",
    headers: {
        "Title" : "Check the senior website!", 
        "Priority" : "4"
    }
})