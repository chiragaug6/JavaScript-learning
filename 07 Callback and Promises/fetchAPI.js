fetch("http://api.nstack.in/v1/todos?page=1&limit=10")
    .then((response) => {
        return response.json();
    }).then((value) => {
        console.log(value);
    });