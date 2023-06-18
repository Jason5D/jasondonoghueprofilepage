export default function AboutMe({ handleAboutMe }) {
  return (
    <button className="aboutme" onClick={(e) => handleAboutMe(e.value)}>
      <h2>About Me</h2>
    </button>
  );
}
