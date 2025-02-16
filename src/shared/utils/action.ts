"use server";

import { Provider } from "@supabase/supabase-js";
import { supabase } from "./supabase";

const signInWith = (provider: Provider) => async () => {
  const auth_callback_url = `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`;
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: auth_callback_url,
    },
  });
  console.log(data);
  if (error) {
    console.error(error);
  }
};

const signInWithGoogle = signInWith("google");

export { signInWithGoogle };
