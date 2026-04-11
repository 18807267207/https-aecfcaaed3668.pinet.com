export default {
  async fetch(request, env) {
    // 这里替换成你真正的验证 Key
    const VALIDATION_KEY = "这里替换成你真正的验证Key";

    const url = new URL(request.url);

    // 处理验证请求
    if (url.pathname === "/.well-known/pki-validation/" + VALIDATION_KEY + ".txt") {
      return new Response(VALIDATION_KEY, {
        status: 200,
        headers: {
          "Content-Type": "text/plain",
        },
      });
    }

    // 如果是访问根目录，给个提示
    if (url.pathname === "/") {
      return new Response("Worker is running. Please access the validation URL.", { status: 200 });
    }

    // 其他请求返回 404
    return new Response("Not Found", { status: 404 });
