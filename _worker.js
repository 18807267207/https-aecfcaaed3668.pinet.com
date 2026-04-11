export default {
  async fetch(request, env) {
    // 17b2dfa542140f462a2653d10b8ac998c6d916072ef2804343603f56ae323f67d73fc1a25395321e0e1d53fe30b67d3e345ff3daafcf2a8502280ccbe0fdaf7c Key
    const VALIDATION_KEY =17b2dfa542140f462a2653d10b8ac998c6d916072ef2804343603f56ae323f67d73fc1a25395321e0e1d53fe30b67d3e345ff3daafcf2a8502280ccbe0fdaf7c

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
