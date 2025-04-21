
// Remove duplicate import
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

// Allows the user to sign in with email/password
export function SignInButton({ className = "" }: { className?: string }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        // Sign up
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        
        if (error) throw error;
        toast({
          title: "Sign up successful!",
          description: "Check your email for a confirmation link.",
        });
      } else {
        // Sign in
        const { error, data } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        
        if (error) throw error;
        toast({ title: "Signed in successfully!" });
        console.log("User ID:", data.user?.id);
        setIsDialogOpen(false);
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        variant="secondary"
        className={`${className} px-6 py-3 rounded-lg shadow-lg flex items-center gap-2`}
        onClick={() => setIsDialogOpen(true)}
      >
        <LogIn />
        Sign In to Upload
      </Button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px] bg-gray-800 border-gray-700 text-gray-100">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              {isSignUp ? "Create an Account" : "Sign In"}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleAuth} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
                className="bg-gray-900 border-gray-700"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                required
                className="bg-gray-900 border-gray-700"
                minLength={6}
              />
            </div>
            <div className="flex flex-col gap-2 pt-2">
              <Button type="submit" disabled={loading}>
                {loading ? "Processing..." : isSignUp ? "Sign Up" : "Sign In"}
              </Button>
              <Button 
                type="button" 
                variant="ghost" 
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-sm hover:text-purple-400"
              >
                {isSignUp ? "Already have an account? Sign in" : "Need an account? Sign up"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
