/**
 * Arbitrary test endpoint that accepts an `email` field in the JSON body.
 */
export async function post(request, context) {
  const { email } = request.body;

  return {
    body: {
      email,
    },
  };
}
