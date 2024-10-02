#!/usr/bin/node
export default function uploadPhoto(filename) {
    return Promise.reject(new Error(`${filename} Cannot be processed`));
}
