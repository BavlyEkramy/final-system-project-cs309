import { Typography } from "@mui/material";
import './index.css';


const ErrorPage = ({ msg }) => {
  return (
    <div className="error-page">
      <div className="container">
        <Typography color="error" fontSize={40}>{msg}</Typography>
      </div>
    </div>
  );
}

export default ErrorPage;