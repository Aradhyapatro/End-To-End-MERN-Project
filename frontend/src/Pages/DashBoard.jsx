import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import GoalForm from "../components/GoalForm";
import { getGoal, reset } from "../features/goal/goalSlice";

const DashBoard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const { goals, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.goal
  );

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    dispatch(getGoal);

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, dispatch]);

  return (
    <>
      <section className="heading container">
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
        <GoalForm></GoalForm>
      </section>
    </>
  );
};

export default DashBoard;
