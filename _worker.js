export default {
  async fetch(request) {
    const url = new URL(request.url);

    // 这里填入你刚才发给我的那串完整的 Key
    const MY_KEY = "17b2dfa542140f462a2653d10b8ac998c6d916072ef2804343603f56ae323f67d73fc1a25395321e0e1d53fe30b67d3e345ff3daafcf2a8502280ccbe0fdaf7c";

    // 只要有人访问 validation-key.txt，就直接返回这个 Key
    if (url.pathname === "/validation-key.txt") {
      return new Response(MY_KEY, {
        status: 200,
        headers: {
          "Content-Type": "text/plain",
        },
      });
    }

    return new Response("Worker is running. Please check validation-key.txt", { status: 200 });
  },
};
