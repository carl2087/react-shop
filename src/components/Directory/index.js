import React from "react";
import ShopMen from '../../assets/serious-handsome-young-man-sitting-isolated.jpg'
import ShopWomen from '../../assets/woman-with-shopping-bags-studio-yellow-background-isolated.jpg'
import './styles.scss'

const Directory = props => {
    return (
        <div className="directory">
            <div className="wrap">
                <div
                    className='item'
                    style={{
                        backgroundImage: `url(${ShopWomen})`
                    }}
                >

                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                        Shop Womens
                    </a>

                </div>
                <div
                    className='item'
                    style={{
                        backgroundImage: `url(${ShopMen})`
                    }}
                >

                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                        Shop Mens
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Directory;