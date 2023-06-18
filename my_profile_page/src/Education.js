export default function Education({handleEducation}) {
    return (
        <button className="education"
        onClick={(e) => handleEducation(e.value)}
        >
            <h2>Education</h2>
        </button>
    )
}