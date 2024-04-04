export default function getAll() {
  fetch(
    "https://gameplay-5d849-default-rtdb.firebaseio.com/games/catalog.json"
  ).then(res => res.json());
}

export function getOne(id) {
  fetch(
    `https://gameplay-5d849-default-rtdb.firebaseio.com/games/catalog/${id}.json`
  ).then(res => res.json());
}
