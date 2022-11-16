
const UsersList = ({users, selectUser, deleteUser}) => {
    return (
        <>
        <div className="user__flex">
         {                      /* despliega los datos */
            users.map( user => (
                <div key={user.id} className="user__container">
                    <div className="user">
                    <h2 className="user__name">{user.first_name} {user.last_name}</h2>
                    <p className="user__email">
                        <i className="fa-solid fa-envelope"></i><b>Email:</b> {user.email}
                    </p>
                    <p className="user__birthday">
                        <i className="fa-solid fa-cake-candles"></i><b>Birthday:</b> {user.birthday}
                    </p>
                    </div>
                    <div className="list__btn">
                        <button className="button"  style={{backgroundColor: "#20dbd8"}} onClick={() => selectUser(user)}>select</button>
                        <button className="button"  style={{backgroundColor: "#cf1649"}} onClick={() => deleteUser(user.id)}>delete</button>
                    </div>
                </div>
            ))
         }
         </div>
        </>
    );
};

export default UsersList;