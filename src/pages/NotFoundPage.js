import { useEffect, useLocation, useNavigate } from "react";

function NotFoundPage() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    navigate("/");
  });

  return (
    <div>
      <button onClick={() => navigate("/products")}>Go Back to Products</button>
      <img
        src="https://as1.ftcdn.net/v2/jpg/02/99/61/74/1000_F_299617487_fPJ8v9Onthhzwnp4ftILrtSGKs1JCrbh.jpg"
        alt="error"
      />
    </div>
  );
}

export default NotFoundPage;
