import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInThunk } from 'store/authorization/authorizationAsyncThunk';
import { useForm } from 'react-hook-form';

import {
  LoginDiv,
  LoginDivBox,
  LoginFormBx,
  LoginDivLogin,
  LoginH2,
  LoginInput,
  LoginButton,
  LoginDivGrup,
  LoginDivGrupSpan,
  LoginNavLink,
} from './LoginStyled';

const LoginUserPage = () => {
  return (
    <div>
      <LoginDiv>
        <LoginDivBox>
          <LoginDivLogin>
            <LoginFormBx>
              <LoginH2>
                <i
                  className="fa-solid fa-right-to-bracket"
                  style={{
                    color: '#ff2770',
                    textShadow: '0 0 5px #ff2770, 0 0 25px #ff2770',
                  }}
                ></i>{' '}
                Login{' '}
                <i
                  className="fa-solid fa-heart"
                  style={{
                    color: '#ff2770',
                    textShadow: '0 0 5px #ff2770, 0 0 25px #ff2770',
                  }}
                ></i>
              </LoginH2>
              <LoginInput type="email" name="email" placeholder="Email" />

              <LoginInput type="password" name="password" placeholder="Password" />
              <LoginButton>Login</LoginButton>
              <LoginDivGrup>
                <LoginDivGrupSpan>Forgot Password</LoginDivGrupSpan>
                <LoginNavLink to="/register">Register</LoginNavLink>
              </LoginDivGrup>
            </LoginFormBx>
          </LoginDivLogin>
        </LoginDivBox>
      </LoginDiv>
    </div>
  );
};

export default LoginUserPage;
