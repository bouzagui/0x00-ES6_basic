#!/usr/bin/node
export default function getStudentIdsSum(array) {
  const result = array.reduce((acc, list) => list.id + acc, 0);
  return result;
}
