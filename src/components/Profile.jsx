

function Profile() {
  return (
    <div>
        <h1>Profile card Challenge</h1>
        <ProfileCard
        name="farhan"
        age={30}
        greeting={
            <div>
                <strong>Hi Alice, have a wonderful day!</strong>
            </div>
        }
        >
            <p>Hobbies: reading,Hiking</p>
            <button>Contact</button>
        </ProfileCard>

        <ProfileCard
        name="Ahmad"
        age={27}
        greeting={
            <div>
                <strong>Hi ahmad, have a wonderful day!</strong>
            </div>
        }
        >
            <p>Hobbies: Dancing, News ,reading,Hiking</p>
            <button>Contact</button>
           </ProfileCard>



    </div>
  )
}

export default Profile

function ProfileCard({name,age,greeting,children}){

   
    return(
        <>
            <h1>Name: {name}</h1>
            <p>Age:{age}</p>
            <p>{greeting}</p>
            <div>{children}</div>
        </>
    )
}