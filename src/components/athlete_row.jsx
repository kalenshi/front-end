import React, {Component} from 'react';

class AthleteRow extends Component {
    state = {
        athlete: {
            name: "Maria Jones",
            age: 27,
            city: "Dartmouth",
            province: "NS",
            country: "Canada",
            id: 5
        }
    };

    render() {
        const {name, age, city, province, id} = this.state.athlete;
        return (
            <tr>
                <td scope="row">{name}</td>
                <td scope="row">{age}</td>
                <td scope="row">{city},{province}</td>
                <td scope="row">
                    <a className="m-2" href="#">VIEW</a>
                    <a className="m-2" href="#">DELETE</a>
                </td>
            </tr>
        );
    }

    handleDelete = (id) => {
        console.log(id);
    };
    handleView = (id) => {
        console.log(id);
    };

}

export default AthleteRow;