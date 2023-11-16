import React from "react";
import { NavLink } from "react-router-dom";
import icon from './assests/recLogo.png'

const header = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <header style={{
                width: '100vw',
                height: '60px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                marginTop: '1.5rem',
                backdropFilter: 'blur(-5px)',
                WebkitBackdropFilter: 'blur(5px)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <div style={{ marginLeft: '1rem', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <img
                src={icon}
                alt="icon"
                style={{
                  width: "5vw",
                }} />
                    <h3
                        style={{
                            width: "15vw",
                            fontSize: "30px",
                            fontWeight: "bold",
                            color: "rgb(26, 37, 70)",
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                            letterSpacing: "2px",
                            fontFamily: 'Agbalumo, sans-serif',
                        }}
                    >
                        Recruit.com
                    </h3></div>

                <div style={{ marginRight: '1rem' }}>
                    <NavLink style={{ marginRight: '1rem', color: 'white' }} to="/">About us</NavLink>
                    <NavLink style={{color:'white'}} to="/contact">Contact us</NavLink>
                </div>
            </header>

        </div>
    )
}

export default header