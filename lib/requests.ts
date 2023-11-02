export const fetchPokemon = async (idx: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/pokemon/${idx}`
    );
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};

export const makeVote = async (body: { name: string; image: string }) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/vote`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
  } catch (error) {
    return error;
  }
};

export const fetchAllData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/data`,
      {
        cache: "no-store",
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};
