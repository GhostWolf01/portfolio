import { defineEventHandler, getRequestURL, getRequestHeaders } from "#imports";

export default defineEventHandler((event) => {
  const date = new Date();
  const requestHeaders = getRequestHeaders(event);
  const requestURL = getRequestURL(event);
  console.log(
    `${date.toISOString()} New request: ${event.method} ${requestURL} User: ${
      requestHeaders["user-agent"]
    };`
  );
});
