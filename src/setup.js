/*
 * The error seems to occur when returning _something_, in this case `headers`, but could it happens with `context` as well.
 */
export async function prepare({ headers }) {
  return {
    // Try commenting out the next line. The endpoint should work again.
    headers,
  };
}
