#!/usr/bin/node
import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, fileName) {
    let promises = ([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    let result = [];
    return Promise.allSettled(promises).then((res) => {
        res.map(({ status, value, reason }) => {
          result.push({
            status,
            value: status === 'rejected' ? reason.toString() : value.body,
          })
    });
    return result;
    });
}
