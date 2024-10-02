let uploadPhoto = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            status: 200,
            body: 'photo-profile-1',
        });
    }, 1000);
})
uploadPhoto
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
