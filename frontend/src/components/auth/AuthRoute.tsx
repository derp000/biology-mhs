import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface AuthRouteProps {}

const AuthRoute = (props) => {
  const { children } = props;
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const AuthCheck = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
      } else {
        console.log("unauthorized");
        navigate("/login");
      }
    });

    return () => AuthCheck();
  }, [auth, navigate]);

  if (loading) return <p>loading...</p>;

  return <div>{children}</div>;
};

export default AuthRoute;
