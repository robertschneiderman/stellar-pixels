export const photosArray = (obj) => {
  let array = [];
  for (let id in obj) {
    if (id) {
      let photo = obj[id];
      array.push(photo);
    }
  }
  return array;
}