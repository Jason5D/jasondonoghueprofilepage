export default function Hobbies({handleHobbies}) {
    return (
        <button className="hobbies"
        onClick={(e) => handleHobbies(e.value)}
        >
            <h2>Hobbies</h2>
        </button>
    )
}