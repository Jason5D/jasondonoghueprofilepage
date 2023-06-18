export default function Skills({handleSkills}) {
    return (
        <button
        className="skills"
        onClick={(e) => handleSkills(e.value)}>
            <h2>Skills</h2>
        </button>
    )
}