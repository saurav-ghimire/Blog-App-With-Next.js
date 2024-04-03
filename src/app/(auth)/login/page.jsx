
import { signIn } from "@/lib/auth";

async function Login() {
  
  const handleGithubLogin = async () => {
    "use server"  
    await signIn("github");
  };

  return (
    <form onSubmit={handleGithubLogin}>
      <button>Login with Github</button>
    </form>
  );
}

export default Login;
