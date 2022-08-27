export const URL = 'http://192.168.43.45:5000';

/* DIRECTION TRUCKS ------------------------------ */
export const AGENCY_DIRECTION = async (id_direction) => {
  await fetch('http://192.168.43.45:5000/api/id_direction', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({title: id_direction}),
  });
};

/* OTHER TRUCKS ------------------------------ */
