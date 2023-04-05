fetch('https://ntfy.sh/arufus_test', {
    method: 'POST', // PUT works too
    headers: {
        'Click': 'https://home.nest.com/',
        'Attach': 'https://nest.com/view/yAxkasd.jpg',
        'Actions': 'http, Open door, https://api.nest.com/open/yAxkasd, clear=true',
        'Email': 'phil@example.com'
    },
    body: `There's someone at the door. 🐶

Please check if it's a good boy or a hooman. 
Doggies have been known to ring the doorbell.`,
})