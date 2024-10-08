#!/usr/bin/node
export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  return array.map((list) => list.id);
}
