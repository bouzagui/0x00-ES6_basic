#!/usr/bin/node
export default function uploadPhoto(filename) {
    return new Promise((reject) => {
        if (filename === 'guillaume.jpg') {
            reject(new Error(`${filename} canot be processed`));
        }
    });
}
