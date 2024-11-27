import { Component } from "react";

class AdminReportsReview extends Component {
    render() {
        return (
            <div className="admin-content">
                <div className="admin-graphs">
                    <div className="admin-graph">
                        <div className="admin-graph__text">
                            <p>Total Bans</p>
                            <span>2</span>
                        </div>
                        <div className="admin-graph__graph">

                        </div>
                    </div>
                    <div className="admin-graph">
                        <div className="admin-graph__text">
                            <p>Total Users</p>
                            <span>19,253</span>
                        </div>
                        <div className="admin-graph__graph">

                        </div>
                    </div>
                    <div className="admin-graph">
                        <div className="admin-graph__text">
                            <p>Total Posts</p>
                            <span>100</span>
                        </div>
                        <div className="admin-graph__graph">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminReportsReview;
