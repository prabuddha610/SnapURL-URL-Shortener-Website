import supabase from "./supabase";

export async function getClicks() {
  let {data, error} = await supabase.from("clicks").select("*");

  if (error) {
    console.error(error);
    throw new Error("Unable to load Stats");
  }

  return data;
}

