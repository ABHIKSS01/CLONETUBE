import React from "react";
import { NavLink } from "react-router-dom";
import '../../styles/components/sidebar.css'

const Sidebar = ({ isOpen }) => {
    const categories = [
        { id:'home', name: 'Home', icon: 'fas fa-home', path: '/' },
        { id:'trending', name: 'Trending', icon: 'fas fa-fire', path: '/trending' },
        { id:'subscriptions', name: 'Subscriptions', icon: 'fas fa-photo-video', path: '/subscriptions' },
        { id:'library', name: 'Library', icon: 'fas fa-photo-video', path: '/library' },
        { id:'history', name: 'History', icon: 'fas fa-history', path: '/history' },
        { id: 'music', name: 'Music', icon: 'fas fa-music', path: '/music' },
        { id: 'gaming', name: 'Gaming', icon: 'fas fa-gamepad', path: '/gaming' },
        { id: 'news', name: 'News', icon: 'fas fa-newspaper', path: '/news' },
        { id: 'sports', name: 'Sports', icon: 'fas fa-trophy', path: '/sports' },
        { id: 'learning', name: 'Learning', icon: 'fas fa-lightbulb', path: '/learning' },
        { id: 'fashion', name: 'Fashion', icon: 'fas fa-tshirt', path: '/fashion' },
        { id:'watch-later', name: 'Watch later', icon: 'fas fa-clock', path: '/watch-later' },
        { id:'liked-videos', name: 'Liked videos', icon: 'fas fa-thumbs-up', path: '/liked-videos' },
        { id:'show-more', name: 'Show more', icon: 'fas fa-chevron-down', path: '/show-more' },
    ];
    return (
        <aside className={`sidebar ${isOpen ? 'open': 'closed'} `}>
            <nav className="sidebar-nav">
                {categories.map(category => (
                <NavLink 
                    key={category.id}
                    to={category.path}
                    className={({ isActive }) => 
                    isActive ? 'sidebar-item active' : 'sidebar-item'
                    }
                >
                    <i className={category.icon}></i>
                    <span className="sidebar-text">{category.name}</span>
                </NavLink>
                ))}
            </nav>
            <div className="sidebar-footer">
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>© 2025 YouTube Clone</p>
            </div>
        </aside>
    );
}
export default Sidebar;