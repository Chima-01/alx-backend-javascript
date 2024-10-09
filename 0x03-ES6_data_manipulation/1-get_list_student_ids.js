export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    return arr.map((content) => content.id);
  }
  return [];
}
