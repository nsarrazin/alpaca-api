import type { Load } from "@sveltejs/kit";

interface User {
  id: string;
  username: string;
  email: string;
  pref_theme: "light" | "dark";
  full_name: string;
  default_prompt: string;
}

export const load: Load = async () => {
  try {
    const user = await fetch("/api/user/", {
      method: "GET",
    }).then((response) => response.json());
    return { user };
  } catch (error) {
    console.error(error);
    return { user: null };
  }
};
