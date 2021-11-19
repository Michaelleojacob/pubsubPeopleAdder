import cached from '../queryObj/queryObj';

export default function preventSubmit() {
  const { form } = cached;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });
  return form;
}
