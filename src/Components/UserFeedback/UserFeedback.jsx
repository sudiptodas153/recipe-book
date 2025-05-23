import React from 'react';

const UserFeedback = ({feedback, setFeedback}) => {
    return (
        <div>
            <div>
                <h2>Users Feedback</h2>
                <p></p>
            </div>
            <div>
                {
                    feedback.map(feed=> <div key={feed._id}>
                        <div>
                            
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default UserFeedback;