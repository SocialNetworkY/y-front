import React from 'react';
import "../admin-panel/admin-panel.scss";
import { useTheme } from '../hooks/change-theme';

const AdminPanelSettings = () => {
    const { theme, toggleTheme, checked } = useTheme();

    return (
        <div className="admin-content admin-content--settings">
            <div className="admin-checkbox">
                <div className="checkbox-wrapper-9">
                    <div className="checkbox-wrapper-9">
                        <input
                            className="tgl tgl-flat"
                            id="cb4-9"
                            type="checkbox"
                            checked={checked}
                            onChange={toggleTheme} />
                        <label className="tgl-btn" htmlFor="cb4-9"></label>
                    </div>
                </div>
                <span>{theme} theme</span>
            </div>
        </div>
    );
};

export default AdminPanelSettings;
