#!/usr/bin/node
export default function getStudentsByLocation(array, city) {
  const result = array.filter((list) => list.location === city);
  return result;
}
