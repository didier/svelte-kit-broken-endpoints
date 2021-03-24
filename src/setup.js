/*
 * The error seems to occur when returning _something_, in this case `headers`, but it could happen with `context` as well.
 */
export async function prepare({ headers }) {
  return {
    // Try commenting out the next line. The endpoint should work again.
    headers,
  };
}
