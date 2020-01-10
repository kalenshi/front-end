import React,{Component} from 'react';

class Pagination extends Component {
    state = {
        pages:[1,2,3]
    };

    render() {
        return (
            <nav aria-label="...">
                <ul className="pagination pagination-sm">
                    <li className="page-item active" aria-current="page">
                      <span className="page-link">
                        1
                        <span className="sr-only">(current)</span>
                      </span>
                    </li>
                    {this.state.pages.map(page=>{
                        <li className="page-item"><a className="page-link" href="#">{page}</a></li>
                    })}

                </ul>
            </nav>
        );
    }
}
export default Pagination;