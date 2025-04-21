import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { supabase } from "@/lib/supabase";
import React from "react";

// Allows the user to sign in with a click - you can adjust provider here later if needed
export function SignInButton({ className = "" }: { className?: string }) {
  const handleSignIn = async () => {
    // This will open Supabase's magic link signin, you might want to change to social logins if needed.
    // For now keeping it simple: opens email signin in a new tab
    await supabase.auth.signInWithOAuth({ provider: "google" });
  };

  return (
    <Button
      variant="secondary"
      className={`${className} px-6 py-3 rounded-lg shadow-lg flex items-center gap-2`}
      onClick={handleSignIn}
    >
      <LogIn />
      Sign In to Upload
    </Button>
  );
}
