export default function Experience({handleExperience}) {
    return (
        <button className="experience"
        onClick={(e) => handleExperience(e.value)}
        >
            <h2>Experience</h2>
        </button>
    )
}