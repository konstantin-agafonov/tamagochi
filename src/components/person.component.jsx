import {connect} from "react-redux";

const Person = ({ name, sex, hunger, thirst }) => (
    <table>
        <thead>
            <tr>
                <td colSpan="2">
                    <strong>Person state</strong>
                </td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Name:</td>
                <td>{name}</td>
            </tr>
            <tr>
                <td>Sex:</td>
                <td>{sex}</td>
            </tr>
            <tr>
                <td>Hunger:</td>
                <td>{hunger}</td>
            </tr>
            <tr>
                <td>Thirst:</td>
                <td>{thirst}</td>
            </tr>
        </tbody>
    </table>
)

const mapStateToProps = state => ({
    name: state.person.name,
    sex: state.person.sex,
    hunger: state.person.hunger,
    thirst: state.person.thirst,
})


export default connect(
    mapStateToProps,
    null
)(Person);