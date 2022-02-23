export const KORISNICKO_IME = "KORISNICKO_IME";
export const REPOZITORIJ = "REPOZITORIJ";
export const RESET = "RESET";

export const korisnik = (user) => async (dispatch) => {
  let dohvaceniKorisnici = await fetch(`https://api.github.com/users/${user}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  dispatch({ type: KORISNICKO_IME, payload: dohvaceniKorisnici });
};

export const repo = (userRepo) => async (dispatch) => {
  let dohvaceniRepo = await fetch(
    `https://api.github.com/users/${userRepo}/repos`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  dispatch({ type: REPOZITORIJ, payload: dohvaceniRepo });
};

export function reset() {
  return { type: RESET };
}
