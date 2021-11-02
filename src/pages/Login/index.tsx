import React from "react";
import { TextField, Button } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import "./styles.scss";
import { documentTitle } from "../../utils";
import { login } from "../../redux/actions";
// import { Reducers } from "../../redux/types";
import { Card } from "../../component";

// styling untuk textinput khusus di login saja
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: 300,
      },
    },
  })
);

// define required
interface InputProps {
  pid?: string;
  email: string;
  password: string;
}

const Login = () => {
  documentTitle("login");
  const dispatch = useDispatch();
  const classes = useStyles();
  const { register, handleSubmit } = useForm<InputProps>();

  const _handleLogin = (data: InputProps) => {
    const formData = {
      ...data,
      pid: "IDD3718",
    };

    dispatch(login({ data: formData }));
  };

  return (
    <div className="container">
      <Card>
        <h2>Login</h2>
        <form className={classes.root} onSubmit={handleSubmit(_handleLogin)}>
          <div>
            <TextField
              variant="outlined"
              label="Email"
              type="text"
              placeholder="Masukan Email"
              {...register("email", { required: true })}
            />
          </div>
          <div>
            <TextField
              variant="outlined"
              label="Password"
              type="password"
              placeholder="Masukan Password"
              {...register("password", { required: true })}
            />
          </div>
        </form>
        <div style={{ marginTop: 20, paddingLeft: 8 }}>
          <Button
            type="submit"
            onClick={handleSubmit(_handleLogin)}
            style={{
              maxWidth: "400px",
              maxHeight: "100px",
              minWidth: "300px",
              minHeight: "30px",
            }}
            variant="contained"
            className="btn-login"
            color="primary"
          >
            Login
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Login;
