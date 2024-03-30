import Link from "next/link";

function NotFound() {
  return <>
  <h2>404 Not Found</h2>
  <p>Return to <Link className="p-3 bg-slate-500 inline-block text-cyan-50" href="./">Home</Link></p>
  </>;
}

export default NotFound;