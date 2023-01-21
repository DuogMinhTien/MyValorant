export default function LinkSocial({ title, to, img }) {
  return (
    <a href={to} target="_blank" title={title}>
      <img src={img} />
    </a>
  );
}
