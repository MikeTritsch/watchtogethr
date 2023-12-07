import { RiHeartAddFill } from "react-icons/ri";

const Friend = () => {
  return (
    <>
    <div className="friend-card">
      <div className="friend-card-body card">
        <div className="card-body">
          <h5 className="card-title">Moviewatchr115</h5>
            <button className="btn addFriend card-link">
              <RiHeartAddFill className="addFriend-icon"/>
            </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Friend;
