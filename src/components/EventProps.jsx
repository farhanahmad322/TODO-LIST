export const EventProps = () => {
  const handelewelcomeUser = (user) => {
    alert(`Hey, ${user}`);
  };

  const handleHover = () => {
    alert(`Hover me`);
  };

  return (
    <WelcomeUser
      onClickkk={() => handelewelcomeUser("farhan")}
      onMouseEnter={handleHover}
    />
  );
};

const WelcomeUser = (props) => {
  const {onClickkk,onMouseEnter}=props;
  const handleGreeting = () => {
    console.log(`Hey user,Welcome`);
   
  };
  return (
    <>
      <div className="mt-4 flex min-h-screen justify-center items-center">
        <button
          className=" mx-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
          onClick={onClickkk}
        >
          Click
        </button>

        <button
          className="mx-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
          onMouseEnter={onMouseEnter}
        >
          Hover
        </button>

        <button
          className="mx-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
          onClick={handleGreeting}
        >
          Greeting
        </button>
      </div>
    </>
  );
};
