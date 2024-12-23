const socket = io({
    auth: {
        token: "mock "
    }
})


socket.on("connect_error", (err) => {

    console.group('error');
    console.error(err)
    console.groupEnd('error');


})

socket.on("connect", () => {

})

