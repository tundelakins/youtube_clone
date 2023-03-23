import React from 'react';
import "./Sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar d-flex align-items-center pointer">
            <div className="sidebar-items d-flex align-items-center active">
                <div className="menubar">
                    <svg
                        viewBox="0 0 24 25"
                        preserveAspectRatio="xMidYMid meet"
                        focusable="false"
                        
                        class="style-scope yt-icon pointer"
                        style={{ "width": "20px", "height": "20px", margin: "0px 20px" }}
                    >
                        <g class="style-scope yt-icon">
                           <path
                                d="M4,10V21h6V15h4v6h6V10L12,3Z"
                                class="style-scope yt-icon"
                            ></path>
                        </g>
                    </svg>
                    <span className="sidebar-text">Home</span>
                </div>
                <div className="sidebar-items d-flex align-items-center active">
                    <svg viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        focusable="false"
                        class="style-scope yt-icon"
                        style={{ "width": "20px", "height": "20px", margin: "0px 20px" }}
                    >
                        <g class="style-scope yt-icon">
                            <path
                                d="M4,10V21h6V15h4v6h6V10L12,3Z"
                                class="style-scope yt-icon"
                            ></path>
                        </g>
                    </svg>
                    <span className="sidebar-text">Shorts</span>
                    </div>
                    <div className="sidebar-items d-flex align-items-center active">
                        <svg viewBox="0 0 24 24"
                            preserveAspectRatio="xMidYMid meet"
                            focusable="false"
                            class="style-scope yt-icon"
                            style={{ "width": "20px", "height": "20px", margin: "0px 20px" }}
                        >
                        <g class="style-scope yt-icon">
                            <path
                                d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"
                                class="style-scope yt-icon"
                            ></path>
                        </g>
                    </svg>
                </div>



            </div>
        
        
        
        
        </div>
    );
}

export default Sidebar;