export default function LoanInput({ title, type, style, required }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginRight: "5rem",
        marginLeft: "5rem",
      }}
    >
      <label>
        <a style={{ ...style }}> {title}</a>
      </label>
      <input type={type ?? "text"} name={title} required={required}></input>
    </div>
  );
}
