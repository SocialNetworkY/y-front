import { Component } from "react";

class AdminUsersReview extends Component {
    render() {
        return (
            <div className="admin-content admin-content--users">
                <div className="admin-list">
                    <div className="admin-list__title">
                        <h4>Users List</h4>
                        <div className="admin-list__filters">
                            <button className="admin-list__filters-btn">
                                <span>Filter By</span>
                            </button>
                            <button className="admin-list__filters-btn">
                                <span>Sort By:</span>
                            </button>
                        </div>
                    </div>
                    <table className="admin-list__body">
                        <thead>
                            <tr>
                                <th><span>ID</span></th>
                                <th><span>Username</span></th>
                                <th><span>Email</span></th>
                                <th><span>Nickname</span></th>
                                <th><span>Role</span></th>
                                <th><span>Banned</span></th>
                                <th><span>Avatar</span></th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th><span>2</span></th>
                            <th><span>Levchenko2010</span></th>
                            <th><span>levchenko@gmail.com</span></th>
                            <th><span>coolboy_x</span></th>
                            <th><span>user</span></th>
                            <th>
                                <div className="admin-list__row-checkbox">
                                    <input type="checkbox"/>
                                </div>
                            </th>
                            <th>
                                <div className="admin-list__row-avatar">
                                    <img src="" alt=""/>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th><span>2</span></th>
                            <th><span>Levchenko2010</span></th>
                            <th><span>levchenko@gmail.com</span></th>
                            <th><span>coolboy_x</span></th>
                            <th><span>user</span></th>
                            <th>
                                <div className="admin-list__row-checkbox">
                                    <input type="checkbox"/>
                                </div>
                            </th>
                            <th>
                                <div className="admin-list__row-avatar">
                                    <img src="" alt=""/>
                                </div>
                            </th>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default AdminUsersReview;
