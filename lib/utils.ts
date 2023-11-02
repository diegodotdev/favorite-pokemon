import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPA_URL || "",
  process.env.NEXT_PUBLIC_SUPA_SERVICE_ROLE || ""
);

export const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};
