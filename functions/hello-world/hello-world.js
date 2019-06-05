const data = [
  {
    name: "foo",
    id: 1
  },
  {
    name: "bar",
    id: 2
  }
]

exports.handler = async (event, context) => {
  try {
    const subject = event.queryStringParameters.name || "World"
    return { statusCode: 200, body: JSON.stringify(data) }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
