import TypeProps from 'prop-types'
function Student(props){
    const listStudent = props.infor;
    const notify = props.category;
    const listLast = listStudent
                    .filter(student => student.score>9)
                    .map(filterScored=>(<li key={filterScored.id}>{filterScored.id} {filterScored.name} {filterScored.score}</li>))
    return(
        <>
            <h3>{notify}</h3>
            <ul className="student-list">
                {listLast}
            </ul>
        </>
    )
}
// Student.defaultProps = {
//     category: "category",
//     infor: []

// }
// Student.TypeProps = {
//     category: TypeProps.string,
//     infor: TypeProps.arrayOf(TypeProps.shape({id: TypeProps.number,name: TypeProps.string, age: TypeProps.number, score: TypeProps.number}))
// }
export default Student;