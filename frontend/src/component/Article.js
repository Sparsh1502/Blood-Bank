import React, { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate, json } from 'react-router-dom'
import '../css/style.css';
import Navbar from './Navbar';
import Search from './Search';

export default function Article(props) {
    return (
        <>
            <section id="articles">
                <div className="container">
                    <h2 style={{ display: 'inline-block' }}>Articles</h2>
                    <div className="swiper-container">
                        <div className="button-area" style={{ display: 'inline-block', marginLeft: '850px' }}>
                            <div className="swiper-button-next" />
                            <div className="swiper-button-prev" />
                        </div>
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="card">
                                    <div className="card-img-top" style={{ position: 'relative' }}>
                                        <img src={require('../imgs/p3.jpg')} alt="" />
                                        <button className="like"><i className="fas fa-heart icon-large" /></button>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">Blood Types</h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                                            laborum
                                            dolor minus quibusdam sequi asperiores? Fugiat aut consectetur laudantium ea sed
                                            nihil
                                            dolore, in mollitia blanditiis, rem omnis recusandae maiores?</p>
                                        <div className="btn-cont">
                                            <button className="card-btn" onclick="window.location.href = 'article.html';">Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="card">
                                    <div className="card-img-top" style={{ position: 'relative' }}>
                                        <img src={require('../imgs/p4.jpg')} alt="Card image" />
                                        <button className="like"><i className="fas fa-heart icon-large" /></button>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">Donations Benefits</h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                                            laborum
                                            dolor minus quibusdam sequi asperiores? Fugiat aut consectetur laudantium ea sed
                                            nihil
                                            dolore, in mollitia blanditiis, rem omnis recusandae maiores?</p>
                                        <div className="btn-cont">
                                            <button className="card-btn" onclick="window.location.href = 'article.html';">Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="card ">
                                    <div className="card-img-top" style={{ position: 'relative' }}>
                                        <img src={require('../imgs/p1.jpg')} alt="Card image" />
                                        <button className="like"><i className="fas fa-heart icon-large" /></button>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">Disease Protection</h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                                            laborum
                                            dolor minus quibusdam sequi asperiores? Fugiat aut consectetur laudantium ea sed
                                            nihil
                                            dolore, in mollitia blanditiis, rem omnis recusandae maiores?</p>
                                        <div className="btn-cont">
                                            <button className="card-btn" onclick="window.location.href = 'article.html';">Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="card">
                                    <div className="card-img-top" style={{ position: 'relative' }}>
                                        <img src={require('../imgs/p3.jpg')} alt="Card image" />
                                        <button className="like"><i className="fas fa-heart icon-large" /></button>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">How To Donate?</h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                                            laborum
                                            dolor minus quibusdam sequi asperiores? Fugiat aut consectetur laudantium ea sed
                                            nihil
                                            dolore, in mollitia blanditiis, rem omnis recusandae maiores?</p>
                                        <div className="btn-cont">
                                            <button className="card-btn" onclick="window.location.href = 'article.html';">Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}