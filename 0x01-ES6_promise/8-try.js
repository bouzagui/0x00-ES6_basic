#!/usr/bin/node
export default function divideFunction(numerator, demominator) {
  try {
    if (demominator === 0) {
      throw new Error();
    }
    return numerator / demominator;
  } catch (error) {
    throw Error('cannot divide by 0');
  }
}
