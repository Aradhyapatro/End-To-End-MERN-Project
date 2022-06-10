import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goal/goalSlice";

const Goalitem = ({ goal }) => {
  const dispatch = useDispatch();
  const onClick = (id) => {
    dispatch(deleteGoal(id));
  };

  return (
    <div className="goal">
      <p style={{ fontSize: "15px" }}>
        {new Date(goal.createdAt).toLocaleString("en-US")}
      </p>
      <h2>{goal.text}</h2>
      <button
        onClick={() => {
          onClick(goal._id);
        }}
        className="close"
      >
        X
      </button>
    </div>
  );
};

export default Goalitem;
