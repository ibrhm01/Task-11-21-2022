import React from 'react'

function Users() {
    const [users, setUsers] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const handleClick = () => {
        setIsLoading(true);
        fetch("https://63635c9e66f75177ea427f02.mockapi.io/people").then((response) => response.json()
        ).then((data) => {
            setUsers(data);
        }).catch(() => {
            console.log("error");
        }).finally(() => {
            setIsLoading(false);
        })
    };

    // React.useEffect(() => {}, []);



    return (
        <div>
            <button onClick={handleClick}>Get data</button>
            {isLoading ? (<h4>Loading...</h4>) :
                (users.map(({ name, id }) => (
                    <h4 key={id}>
                        {id} -{name}
                    </h4>
                ))
                )}
        </div>
    );
}

export default Users;