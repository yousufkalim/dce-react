export function calculateRating(_) {
  return `${parseFloat((_.reduce((a, b) => a + b, 0) ?? 0) / _.length).toFixed(
    2
  )}`;
}

export function calculateRatingsCount(_) {
  return `${_.length}`;
}
