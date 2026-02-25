export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { username, password } = req.body;

  if (username === "0655683108" && password === "123456") {
    return res.status(200).json({ success: true });
  } else {
    return res.status(401).json({ success: false });
  }
}