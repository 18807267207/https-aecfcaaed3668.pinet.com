export default {
  async fetch(request) {
    const url = new URL(request.url);

    // 这里就是你截图里的那串字符
    const MY_SECRET_KEY = "17b2dfa542140f462a2653d10b8ac998";

    // 核心逻辑：当有人访问 /validation-key.txt 时
    if (url.pathname === "/validation-key.txt") {
      // 直接把那串字符返回给对方
      return new Response(MY_SECRET_KEY, {
        status: 200,
        headers: {
          "Content-Type": "text/plain"
        }
      });
    }

    // 其他情况显示正常页面
    return new Response("Hello! I am ready for validation.", { status: 200 });
  }
};
