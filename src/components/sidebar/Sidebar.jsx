import React from 'react'
import "./Sidebar.css";
import { Avatar } from '@material-ui/core';

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://media-exp1.licdn.com/dms/image/C4D16AQE4gm-1Fbn2kg/profile-displaybackgroundimage-shrink_200_800/0/1517045854666?e=1628121600&v=beta&t=vTjQQM3dof8jU25y6hgUuJiM9OZ1CDtdDJQhy2zzCcA" alt="" />
                <Avatar className="sidebar__avatar" />
                <h2>Azamat Bekmuratov</h2>
                <h4>azamat.bekmuratov24@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,448</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
        </div>
    )
}

export default Sidebar
