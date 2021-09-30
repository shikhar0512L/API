const api = "https://api.github.com/users";


function getData() {
    fetch(api).then((response) => {
        return response.text();
    }).then((data) => {
        console.log(data);
    })
};


getData();