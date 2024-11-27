import { Component } from "react";

class AdminPanelOverview extends Component {
    render() {
        return (
            <div className="admin-content">
                <div className="admin-graphs">
                    <div className="admin-graph">
                        <div className="admin-graph__text">
                            <p>Total Bans</p>
                            <span>29</span>
                        </div>
                        <div className="admin-graph__graph">

                        </div>
                    </div>
                    <div className="admin-graph">
                        <div className="admin-graph__text">
                            <p>Total Reports</p>
                            <span>105</span>
                        </div>
                        <div className="admin-graph__graph">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminPanelOverview;
