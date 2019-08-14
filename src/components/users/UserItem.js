import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { avatar_url, login, html_url } }) => {
    return (
        <div className="card text-center">
            <img src={avatar_url} className="round-img" style={{ width: '60px' }} alt="" />
            <h3>{login}</h3>

            <div>
                <Link to={`/user/${login}`} className="btn-dark btn btn-sm my-1">
                    More
                </Link>
            </div>
        </div>
    );
};

UserItem.defaultProps = {
    user: {
        id: '1',
        login: 'mojombo',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo'
    }
};

UserItem.propTypes = {
    user: PropTypes.object.isRequired
};

export default UserItem;
