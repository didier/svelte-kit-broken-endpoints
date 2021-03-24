/*
 * The error seems to occur when returning _something_, in this case `headers`, but it could happen with `context` as well.
 */
export async function prepare({ headers }) {
  // Destructure every part of the headers
  const { host, cookie, accept } = headers;
  const userAgent = headers['user-agent'];
  const contentType = headers['content-type'];
  const contentLength = headers['content-length'];

  return {
    // Returning headers direcly causes an error, presumably because of the `content-length` header.
    // headers,

    // However, when returning the headers individually (re: not overwriting) everything works fine.
    headers: {
      host,
      cookie,
      userAgent,
      contentType,
      contentLength,
      accept,
    },
  };
}
